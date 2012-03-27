// specific items/happening on a course: lectures, excercise groups, deadlines
Ext.define('MobileNoppa.model.CourseItem', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
      {name: 'id', type: 'string'},
      {name: 'title', type: 'string'},
      {name: 'description', type: 'string'},
      {name: 'type', type: 'string'},
      {name: 'type', type: 'date'},
     //'id', 'title', 'date', 'description', 'type' 
    ],
    proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-courseitems'
    },
    belongsTo: 'Course'
  }
});