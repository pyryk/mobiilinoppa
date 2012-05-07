Ext.define('MobileNoppa.view.Calendar', {
  extend: 'Ext.tab.Panel',
  id: 'calendar',
  alias: 'widget.calendar',
  fullscreen: true,
  config: {
    loadingText: "Loading courses...",
    layout: 'card',
    items: [
      {
        xtype: 'courseitemlist',
        title: 'List',
        store: 'CourseItems',
        id: 'calendarlist',
        grouped: true,
        itemTpl: '<div class="courseItem {type}">'
        	+'{title}<br />'
        	+'<span class="dateAndLocation">{duration} {location}</span> '
        	+'<span class="courseName">{courseName}</span></div>'
      },
      {
        xtype: 'panel',
        title: 'Calendar',
        layout: 'fit',
        items: [
          {
            xtype: 'calendarcmp',
            store: 'CourseItems',
            id: 'calendarcalendar',
            grouped: true,
          },
          {
            xtype: 'toolbar',
            docked: 'top',
            items: [
              {
                xtype: 'button',
                id: 'prevDateBtn',
                text: 'Previous',
              },
              {
                xtype: 'button',
                id: 'nextDateBtn',
                text: 'Next',
              }
            ]
          },
        ]
      },
    ],
  },
  show: function() {
    this.callParent(arguments);
    console.log('calendar shown');
    // calendar includes all course items
    Ext.getStore('CourseItems').clearFilter();
    Ext.getStore('CourseItems').filterBy(function(record, id) {
      var today = new Date();
      today.setHours(0,0,0,0);
      /*today.setDate(8);
      console.log(record.get('date'), record.get('date') == today);*/
      /*return record.get('date').getMonth() == today.getMonth() && 
        record.get('date').getDate() == today.getDate() &&
        record.get('date').getFullYear() == today.getFullYear();*/
      return record.get('date') >= today;
      
    });
  },
  initialize: function() {
    console.log('initializing calendar');
  }
  
});