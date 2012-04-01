Ext.define('MobileNoppa.store.Courses', {
  extend: 'Ext.data.Store',
  proxy: {
          type: 'localstorage',
          id  : 'mobilenoppa-courses'
  },
  model: 'MobileNoppa.model.Course',
  data: [
    { id: 'T-111.5360', name: 'WWW Applications P' },
    { id: 'T-111.5900', name: 'Experimental User Interfaces P' },
  ],
  autoLoad: true
});