Ext.define('MobileNoppa.store.CourseItems', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.LocalStorage',
  ],
  config: {
    model: 'MobileNoppa.model.CourseItem',
    autoLoad: true,
    
    sorters: ['date'],
    groupField: 'date',
    groupDir: 'ASC',
  }
});