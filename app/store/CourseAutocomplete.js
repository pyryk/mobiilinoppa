Ext.define('MobileNoppa.store.CourseAutocomplete', {
  extend: 'Ext.data.Store',
  config: {
    model: 'MobileNoppa.model.Course',
    autoLoad: false,
  }
});