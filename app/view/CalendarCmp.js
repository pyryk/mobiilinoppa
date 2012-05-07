Ext.define('MobileNoppa.view.CalendarCmp', {
  extend: 'Ext.DataView',
  alias: 'widget.calendarcmp',
  config: {
    disableSelection: true,
    emptyText: "No course items found! Please check your courses.",
    itemTpl: '<div style="position: absolute; top: {start}; bottom: {end}; left: 0; right: 0; border: 1px solid black;">{title}</div>',
    tpl: '<div id="calendar" style="position: relative; height: 100%; width: 100%; background: yellow;">',
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
    
    var getEventPosition = function(event) {
      var duration = event.duration
      var start = duration.split('-')[0].split(':');
      var end;
      try {
        end = duration.split('-')[1].split(':');
      } catch(e) {
        end = start;
      }
      
      var startPos = (parseInt(start[0], 10)*60+parseInt(start[1], 10))/24/60*100 + "%";
      var endPos = (1-(parseInt(end[0], 10)*60+parseInt(end[1], 10))/24/60)*100 + "%";
      return {start: startPos, end: endPos};
    }
    
    var pos = getEventPosition(parentData);
    
    parentData.start = pos.start;
    parentData.end = pos.end;

    return parentData;
  },
  show: function() {
    console.log('calendar shown');
  }
});