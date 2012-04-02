// specific items/happening on a course: lectures, excercise groups, deadlines
Ext.define('MobileNoppa.model.CourseItem', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: ["id", "title", "description", "date"
     //'id', 'title', 'date', 'description', 'type' 
    ],
    proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-courseitems'
    },
    belongsTo: 'MobileNoppa.model.Course'
  }
});