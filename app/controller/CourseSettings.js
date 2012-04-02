Ext.define('MobileNoppa.controller.CourseSettings', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            form: '#newcourseform'
        },
        control: {
            '#add-new-button': {
                tap: 'addNew'
            }
        }
    },
    launch: function() {
      this.callParent();
      console.log("coursesettings launch");
      //Ext.getStore("Courses").load();
    },
    init: function() {
      this.callParent();
      console.log("coursesettings init");
    },
    addNew: function() {
      var course = Ext.create('MobileNoppa.model.Course', this.getForm().getValues());
      var store = Ext.getStore('Courses');
      store.add(course);
      store.sync();
      
      console.log("added a new course");
    }
});