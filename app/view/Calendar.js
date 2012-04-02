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
        xtype: 'list',
        store: 'CourseItems',
        itemTpl: '{title} <span class="description">{date}</span>'
      }
    ],
  },
  
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