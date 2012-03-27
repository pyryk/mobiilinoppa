// course model, contains all lectures, assignments etc.
Ext.define('MobileNoppa.model.Course', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      {name: 'id', type: 'string'},
      {name: 'name', type: 'string'},
    ],
    proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-courses'
    },
    //hasMany: 'CourseItem'
  }
});