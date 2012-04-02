Ext.define('MobileNoppa.store.CourseItems', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.LocalStorage',
  ],
  config: {
    model: 'MobileNoppa.model.CourseItem',
    autoLoad: true,
    
    sorters: ['date'],
//    groupField: 'date',
    grouper: {
      groupFn: function (item) {
        var date = moment(item.get('date'));
        return date.calendar().split(" ")[0];
      }
    },
    groupDir: 'ASC',
  }
});