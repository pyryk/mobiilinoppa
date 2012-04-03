Ext.define('MobileNoppa.view.Todo', {
  extend: 'Ext.Panel',
    title: 'To-Do',
    iconCls: 'favorites',
    itemTpl: '{name} <span style="color: #bbb;">{date}</span>',
    config: {
      loadingText: "Loading courses...",
      layout: 'fit',
      items: [
        {
          xtype: 'courseitemlist',
          store: 'CourseItems',
          grouped: true,
          itemTpl: '<div class="courseItem assignment">{title} <span class="description">{courseName}</span></div>',
        }
      ],
    },
    show: function() {
      this.callParent(arguments);
      console.log('todo shown');
      // calendar includes all course items
      Ext.getStore('CourseItems').clearFilter();
      Ext.getStore('CourseItems').filter('type', 'assignment');
    }
});