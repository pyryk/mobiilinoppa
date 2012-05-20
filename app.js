window.mobilenoppa = {};

window.mobilenoppa.apiUrl = "http://mobilenoppa.dy.fi/api/";
window.mobilenoppa.showOldEvents = false;

window.mobilenoppa.app = Ext.application({
    name: 'MobileNoppa',
    models: ['Course', 'CourseItem'],
    views: ['Calendar', 'Todo', 'CourseSettings', 'CourseItemList', 'AddNew'],
    controllers: ['Courses', 'Todo', 'CourseSettings'],
    stores: ['Courses', 'CourseItems', 'CourseAutocomplete'],
    launch: function() {
      var titlebar = Ext.create('Ext.TitleBar', {
        title: 'Mobile Noppa',
        docked: 'top',
        items: [{  
            /*text: 'Load',*/
            align: 'right',
            iconCls: 'refresh',
            iconMask: true,
            action: 'loadCourseItems'
        }]
      });
      
      // create the views
      var calendar = Ext.create('MobileNoppa.view.Calendar', {
        title: 'Calendar',
        iconCls: 'time',
      });
      var todo = Ext.create('MobileNoppa.view.Todo', {
        title: 'To-Do',
        iconCls: 'favorites',
      });  
      var settings = Ext.create('MobileNoppa.view.CourseSettings', {
        title: 'Courses',
        iconCls: 'settings',
      });
      
      // create the main view and add the views there
      Ext.create("Ext.tab.Panel", {
        fullscreen: true,
        tabBarPosition: 'bottom',
        items: [
          titlebar, 
          calendar,
          todo,
          settings,
        ],
        });
    }
});