Ext.define('MobileNoppa.controller.Courses', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            calendar: 'widget.calendar',
            loadButton: 'button[action=loadCourseItems]',
            calendar: '#calendarlist'
        },
        control: {
          calendar: {
            updatedata: 'updateData'
          },
          loadButton: {
            tap: 'loadCourseItems'
          }
        }
    },
    launch: function() {
      this.callParent();
      console.log("launch");
      //Ext.getStore("Courses").load();
    },
    init: function() {
      this.callParent();
      console.log("[MobileNoppa.controller.Courses] init");
      //this.loadCourseItems();
    },
    loadCourseItems: function() {
      window.refreshCourseData();
    },
    updateData: function() {
      console.log('data updated');
    }
});