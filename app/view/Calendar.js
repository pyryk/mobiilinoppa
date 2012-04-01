var CourseStore;

Ext.define('MobileNoppa.view.Calendar', {
  extend: 'Ext.List',
  id: 'calendar',
  alias: 'widget.calendar',
  store: 'MobileNoppa.store.Courses',
  config: {
    loadingText: "Loading courses...",
    items: [
    {
      xtype: "button",
      text: "New",
      ui: "action",
      id:"new-note-btn"
    }],
  },
  title: 'Calendar',
  iconCls: 'time',
  itemTpl: '{name} <span style="color: #bbb;">{date}</span>'
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