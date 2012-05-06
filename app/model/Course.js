// course model, contains all lectures, assignments etc.
Ext.define('MobileNoppa.model.Course', {
  extend: 'Ext.data.Model',

  config: {
    fields: ['id', 'code', 'name', 'exerciseGroup'],
    proxy: {
      type: 'localstorage',
      id  : 'mobilenoppa-courses'
    },
    hasMany: {model: 'MobileNoppa.model.CourseItem', name: 'courseItems'}
  }
});

// TODO move to some better place (Course model static method?)
window.refreshCourseData = function() {
console.log("[MobileNoppa.controller.Courses] loadCourseItems");

Ext.Viewport.setMasked({
	xtype: 'loadmask',
	message: 'Loading course data'
});

var CourseStore = Ext.getStore('Courses');
var CourseItemStore = Ext.getStore('CourseItems');
CourseItemStore.removeAll();

var courseLast = CourseStore.data.last();
if (courseLast){
	CourseStore.each(function(course){
		var code = course.get("code");
		console.log("Loading course " + code, course);
		var url = 'http://verkel.iki.fi:8080/course/'+code+'/all';
		if (course.get("exerciseGroup")) {
		  url += "?group=" + course.get("exerciseGroup");
		}
		
		Ext.Ajax.request({
			url: url,
			success: function(response){
				var text = response.responseText;
				var json = Ext.JSON.decode(text);
				//console.log(text,json);
				if (json && json.courseItems){
					for(var i=0;i<json.courseItems.length;i++){
						var jsonItem = json.courseItems[i];
						jsonItem["course_id"] = course.getId();
						var courseItem = CourseItemStore.add(jsonItem);
						//courseItem[0].setCourse(course.getId());
						//console.log(jsonItem,courseItem,course);
					}
					
					CourseItemStore.sync();
				}
				Ext.Viewport.setMasked(false);
			}
		});
	});	
}


}

/*var CourseStore = Ext.create('Ext.data.Store', {
    model: "MobileNoppa.model.Course",
    autoLoad: true,
});*/