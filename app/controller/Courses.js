Ext.define('MobileNoppa.controller.Courses', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            calendar: '#calendar'
        },
        control: {
            button: {
                tap: 'addNew'
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
      console.log("init");
    },
    addNew: function() {
      console.log("adding a new course");
      Ext.create('MobileNoppa.model.Course', {});
    }
});