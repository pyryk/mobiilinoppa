Ext.define('MobileNoppa.store.Courses', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.LocalStorage',
  ],
  config: {
    model: 'MobileNoppa.model.Course',
    autoLoad: true,
  }
});