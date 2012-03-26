// course model, contains all lectures, assignments etc.
Ext.define('Course', {
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

// specific items/happening on a course: lectures, excercise groups, deadlines
Ext.define('CourseItem', {
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

/*Ext.define('Event', {
  extend: 'CourseItem',
  
  config: {
    fields: ['location', 'enddate'],
    proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-events'
    }
  }
});*/

// Uses the User Model's Proxy
Ext.create('Ext.data.Store', {
    model: 'Course',
    data: [
      { id: 'T-111.5360', name: 'WWW Applications P' },
      { id: 'T-111.5900', name: 'Experimental User Interfaces P' },
    ]
});
Ext.create('Ext.data.Store', {
    model: 'Course',
    data: [
      { id: 'T-111.5360', name: 'WWW Applications P' },
      { id: 'T-111.5900', name: 'Experimental User Interfaces P' },
    ]
});