Ext.define('MobileNoppa.view.CourseItemList', {
  extend: 'Ext.List',
  alias: 'widget.courseitemlist',
  config: {
    disableSelection: true,
    emptyText: "<b>No course items to show!</b><br />Please add some courses at Courses-tab."
  },
  prepareData: function(data, index, item) {
    var parentData = this.callParent(arguments);
    if (!parentData.duration) {
      parentData.duration = ""/*moment(data.date).format("HH:mm")*/;
    }
    try {
      parentData.courseName = item.getCourse().getData().name;
    } catch(e) {
      parentData.courseName = "Unknown course";
    }
    if(!parentData.location){
    	parentData.location = "";
    }
    if (!parentData.title) {
      parentData.title = parentData.description;
    }
    return parentData;
  },
});