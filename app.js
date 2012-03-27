window.mobilenoppa = {};

window.mobilenoppa.app = Ext.application({
    name: 'MobileNoppa',
    models: ['Course', 'CourseItem'],
    views: ['Calendar', 'Todo', 'CourseSettings'],
    controllers: ['Courses'],
    launch: function() {
      var titlebar = Ext.create('Ext.Toolbar', {
        title: 'Mobile Noppa',
        docked: 'top'
      });
      
      var calendar = Ext.create('MobileNoppa.view.Calendar');
      
      Ext.create("Ext.tab.Panel", {
        fullscreen: true,
        tabBarPosition: 'bottom',
        title: "Mobile Noppa",
        items: [
          titlebar, 
          calendar,
        ],
        /*items: [
          views['titlebar'],
              
          // tabbed views
          views['calendar'],
          views['todo'],
          views['courses'],
        ]*/
        });
    }
});