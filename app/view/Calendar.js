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
  }
  
});

/*Ext.onReady(function() {
    CourseStore = Ext.create('Ext.data.Store', {
        model: 'MobileNoppa.model.Course',
        autoLoad: true,

        proxy: {
            type: 'localstorage',
            id: 'mobilenoppa-courses',
        }
    });
});*/