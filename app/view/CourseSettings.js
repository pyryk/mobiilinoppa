Ext.define('MobileNoppa.view.CourseSettings', {
    extend: 'Ext.Panel',
    config: {
      loadingText: "Loading courses...",
      layout: 'card',
      id: 'course-settings-view',
      items: [
        {
          xtype: 'panel',
          layout: 'fit',
          items: [
            {
              xtype: 'list',
              store: 'Courses',
              itemTpl: '{code} {name}',
            },
            {
              xtype: "button",
              alias: 'widget.addnewcourse',
              id: 'add-new-view-button',
              padding: 5,
              margin: 10,
              text: "Add new",
              ui: "action",
              docked: 'bottom',
            },
          ],
        },
        {
          xtype: 'addnewcourse',
        },
        
      ],
    },
    title: 'Settings',
    iconCls: 'settings',
});