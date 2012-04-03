Ext.define('MobileNoppa.view.CourseItemList', {
  extend: 'Ext.List',
  alias: 'widget.courseitemlist',
  config: {
  },
  prepareData: function(data, index, item) {
    var parentData = this.callParent(arguments);
    if (!parentData.duration) {
      parentData.duration = ""/*moment(data.date).format("HH:mm")*/;
    }
    parentData.courseName = item.getCourse().getData().name;
    return parentData;
  },
});