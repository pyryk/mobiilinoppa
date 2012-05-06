Ext.define('MobileNoppa.controller.CourseSettings', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            form: '#newcourseform',
            button: '#add-new-view-button',
            view: '#course-settings-view'
        },
        control: {
            '#add-new-button': {
                tap: 'addNew'
            },
            '#add-new-view-button': {
              tap: 'displayAddNew'
            },
            '#back-to-course-list-button': {
              tap: 'displayCourseList'
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
    displayCourseList: function(btn) {
      console.log('displaying the course list');
      this.getView('#course-settings-view').setActiveItem(0);
    },
    displayAddNew: function(btn) {
      window.thething = this;
      console.log('displaying the add new form');
      this.getView('#course-settings-view').setActiveItem(1);
      this.getForm().reset();
    },
    addNew: function() {
      var course = Ext.create('MobileNoppa.model.Course', this.getForm().getValues());
      var store = Ext.getStore('Courses');
      store.add(course);
      store.sync();
      this.getForm().reset();
      
      // display the list
      this.getView('#course-settings-view').setActiveItem(0);
      
      console.log("added a new course");
    }
});