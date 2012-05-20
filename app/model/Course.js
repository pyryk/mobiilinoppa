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
window.mobilenoppa.refreshCourseData = function() {
	console.log("[MobileNoppa.controller.Courses] loadCourseItems");

	var CourseStore = Ext.getStore('Courses');
	var CourseItemStore = Ext.getStore('CourseItems');
	CourseItemStore.removeAll();

	if (CourseStore.data.length > 0) {
	  Ext.Viewport.setMasked({
	  	xtype: 'loadmask',
	  	message: 'Loading course data'
	  });
	}

	var courseLast = CourseStore.data.last();
	if (courseLast){
		CourseStore.each(function(course){
			var code = course.get("code");
			console.log("Loading course " + code, course);
			var url = window.mobilenoppa.apiUrl + 'course/'+code+'/all';
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