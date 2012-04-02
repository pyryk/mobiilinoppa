window.mobilenoppa = {};

window.mobilenoppa.app = Ext.application({
    name: 'MobileNoppa',
    models: ['Course', 'CourseItem'],
    views: ['Calendar', 'Todo', 'CourseSettings'],
    controllers: ['Courses', 'CourseSettings'],
    stores: ['Courses', 'CourseItems'],
    launch: function() {
      var titlebar = Ext.create('Ext.Toolbar', {
        title: 'Mobile Noppa',
        docked: 'top'
      });
      
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
      
      Ext.create("Ext.tab.Panel", {
        fullscreen: true,
        tabBarPosition: 'bottom',
        title: "Mobile Noppa",
        items: [
          titlebar, 
          calendar,
          todo,
          settings
        ],
        });
    }
});