Ext.define('MobileNoppa.controller.CourseSettings', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            form: '#newcourseform',
            panel: '#coursesettings'
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
      this.getForm().reset();
      
      console.log("added a new course");
    },
    settingsShown: function() {
      console.log('settings shown');
    },
    settingsHidden: function() {
      console.log('settings hidden');
    }
});