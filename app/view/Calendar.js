Ext.define('MobileNoppa.view.Calendar', {
  extend: 'Ext.Panel',
  config: {
    html: 'This is calendar'
  },
  title: 'Calendar',
  iconCls: 'time',
  itemTpl: '{name} <span style="color: #bbb;">{date}</span>'
});