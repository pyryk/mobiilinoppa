

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