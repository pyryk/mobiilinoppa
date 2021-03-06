Ext.define('MobileNoppa.store.CourseItems', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.LocalStorage',
  ],
  config: {
    model: 'MobileNoppa.model.CourseItem',
    autoLoad: true,
    
    sorters: ['date'],
    grouper: {
      groupFn: function (item) {
        var date = moment(item.get('date'));
        if(date){
          // strip the time
        	return date.calendar().replace(/( at)? \d\d:\d\d (am|pm)/i, "");
        } else {
        	return "";
        }
      },
      sortProperty: 'date'
    },
    groupDir: 'ASC',
  }
});