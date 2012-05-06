Ext.define('MobileNoppa.view.Calendar', {
  extend: 'Ext.Panel',
  id: 'calendar',
  alias: 'widget.calendar',
  fullscreen: true,
  config: {
    loadingText: "Loading courses...",
    layout: 'fit',
    items: [
      {
        xtype: 'courseitemlist',
        store: 'CourseItems',
        id: 'calendarlist',
        grouped: true,
        itemTpl: '<div class="courseItem {type}">'
        	+'{title}<br />'
        	+'<span class="dateAndLocation">{duration} {location}</span> '
        	+'<span class="courseName">{courseName}</span></div>'
      }
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
      return record.get('date') >= today;
    });
  },
  initialize: function() {
    console.log('initializing calendar');
  }
  
});