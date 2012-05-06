// course model, contains all lectures, assignments etc.
Ext.define('MobileNoppa.model.Course', {
  extend: 'Ext.data.Model',

  config: {
    fields: ['id', 'code', 'name', 'exerciseGroup'],
    proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-courses'
    },
    hasMany: {model: 'MobileNoppa.model.CourseItem', name: 'courseItems'}
  }
});

/*var CourseStore = Ext.create('Ext.data.Store', {
    model: "MobileNoppa.model.Course",
    autoLoad: true,
});*/