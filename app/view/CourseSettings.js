Ext.define('MobileNoppa.view.CourseSettings', {
    extend: 'Ext.Panel',
    config: {
      loadingText: "Loading courses...",
      layout: 'fit',
      items: [
        {
          xtype: 'list',
          store: 'Courses',
          itemTpl: '{code} {name}'
        }
      ],
    },
    title: 'Settings',
    iconCls: 'settings',
});