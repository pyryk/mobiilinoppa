window.mobilenoppa = {};

window.mobilenoppa.app = Ext.application({
    name: 'MobileNoppa',
    models: ['Course', 'CourseItem'],
    views: ['Calendar', 'Todo', 'CourseSettings'],
    controllers: ['Courses'],
    stores: ['Courses'],
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
      
      Ext.create("Ext.tab.Panel", {
        fullscreen: true,
        tabBarPosition: 'bottom',
        title: "Mobile Noppa",
        items: [
          titlebar, 
          calendar,
          todo
        ],
        });
    }
});