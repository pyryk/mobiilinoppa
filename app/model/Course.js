// course model, contains all lectures, assignments etc.
Ext.define('MobileNoppa.model.Course', {
  extend: 'Ext.data.Model',

  config: {
    fields: ['id', 'code', 'name'],
    proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-courses'
    },
    //hasMany: 'CourseItem'
  }
});

/*var CourseStore = Ext.create('Ext.data.Store', {
    model: "MobileNoppa.model.Course",
    autoLoad: true,
});*/