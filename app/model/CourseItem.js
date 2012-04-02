// specific items/happening on a course: lectures, excercise groups, deadlines
Ext.define('MobileNoppa.model.CourseItem', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
    	{ name: 'id', type: 'int' },
    	{ name: 'title', type: 'string' },
    	{ name: 'description', type: 'string' },
    	{ name: 'date', type: 'date' },
    	{ name: 'type', type: 'string' }
    ],
    /*proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-courseitems'
    },*/
    proxy: {
		type: 'ajax',
		url : 'http://verkel.iki.fi:8080/t-110.5130/all', /* tfy-3.1253 */
		reader: {
			type: 'json',
			rootProperty: 'courseItems'
		}
    },
    belongsTo: 'MobileNoppa.model.Course'
  }
});