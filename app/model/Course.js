// course model, contains all lectures, assignments etc.
Ext.define('MobileNoppa.models.Course', {
  extend: 'Ext.data.Model',

  config: {
    fields: ['id', 'name'],
    proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-courses'
    },
    hasMany: 'CourseItem'
  }
});