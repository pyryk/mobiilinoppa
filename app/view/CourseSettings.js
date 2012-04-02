Ext.define('MobileNoppa.view.CourseSettings', {
    extend: 'Ext.Panel',
    id: " coursesettings",
    config: {
      loadingText: "Loading courses...",
      layout: 'fit',
      items: [
        {
          xtype: 'list',
          store: 'Courses',
          itemTpl: '{code} {name}',
        },
        
      ],
    },
    show: function() {
      console.log('settings shown');
      this.fireEvent("settingsShown", this);
      var header = Ext.ComponentQuery.query('#header')[0];
      header.removeAll();
      header.add({xtype: 'spacer'});
      header.add({xtype: 'button', text: 'New'});
    },
    hide: function() {
      this.fireEvent("settingsHidden", this);
      var header = Ext.ComponentQuery.query('#header')[0];
      header.removeAll();
    },
    title: 'Settings',
    iconCls: 'settings',
});