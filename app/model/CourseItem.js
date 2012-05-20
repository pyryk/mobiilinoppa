/*
 * Course item model
 *
 * represents specific items/happening on a course: lectures, excercise groups, deadlines
 */
Ext.define('MobileNoppa.model.CourseItem', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
    	{ name: 'id', type: 'int' },
    	{ name: 'course_id', type: 'int' },
    	{ name: 'title', type: 'string' },
    	{ name: 'description', type: 'string' },
    	{ name: 'date', type: 'date' },
    	{ name: 'type', type: 'string' },
    	{ name: 'duration', type: 'string' },
    	{ name: 'location', type: 'string' },
		{ name: 'todo_status', type: 'boolean' }
    ],
    proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-courseitems'
    },
    belongsTo: 'MobileNoppa.model.Course'
  }
});