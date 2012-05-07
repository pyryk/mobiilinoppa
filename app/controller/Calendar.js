Ext.define('MobileNoppa.controller.Calendar', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
          calendar: '#calendar',
          calendarCmp: '#calendarcalendar',
          prevDateBtn: '#prevDateBtn',
          nextDateBtn: '#nextDateBtn',
        },
        control: {
          '#prevDateBtn': {
            tap: 'prevDate'
          },
          '#nextDateBtn': {
            tap: 'nextDate'
          }
        }
    },
    launch: function() {
      this.callParent();
      //Ext.getStore("Courses").load();
    },
    init: function() {
      this.callParent();
      console.log("[MobileNoppa.controller.Calendar] init");
      //this.loadCourseItems();
    },
    loadCourseItems: function() {
      window.refreshCourseData();
    },
    prevDate: function() {
      console.log('prev date!');
    },
    nextDate: function() {
      console.log('next date!');
    }
});