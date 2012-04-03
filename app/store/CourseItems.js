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
        	return date.calendar().split(" ")[0];
        } else {
        	return "";
        }
      }
    },
    groupDir: 'ASC',
  }
});