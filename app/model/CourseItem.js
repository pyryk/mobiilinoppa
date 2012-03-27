// specific items/happening on a course: lectures, excercise groups, deadlines
Ext.define('MobileNoppa.models.CourseItem', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: ['id', 'title', 'date', 'description', 'type'],
    proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-courseitems'
    },
    belongsTo: 'Course'
  }
});