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
              id: 'course-list',
              store: 'Courses',
              itemCls: 'course-list',
              itemTpl: '{code} {name}',
              onItemDisclosure: true
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
						{
							xtype: "togglefield",
							name: "toggle",
							id: "showOldToggle",
							label: "Show old course events",
							docked: "bottom",
							labelWidth: '70%',
							labelAlign: 'right'
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