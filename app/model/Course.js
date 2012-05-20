/*
 * Course model, represents one course
 * 
 * Has many courseItems that are the actual course contents
 */
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

/*
 * Global function to update the localstorage course store from API
 */
window.mobilenoppa.refreshCourseData = function() {
	console.log("[MobileNoppa.model.Course] refreshCourseData");

	var CourseStore = Ext.getStore('Courses');
	var CourseItemStore = Ext.getStore('CourseItems');

	// Continue only if there are any courses added
	if (CourseStore.data.length > 0) {
		
		// Show Loading mask
	  Ext.Viewport.setMasked({
	  	xtype: 'loadmask',
	  	message: 'Loading course data'
	  });
	
		// Save the status of todo-tasks to a temporary variable
		var todoStatusTemp = {};
		CourseItemStore.each(function(courseItem){
			if(courseItem.get("type") == "assignment"){
				var hash = courseItem.get("course_id") + courseItem.get("title"); 
				todoStatusTemp[hash] = courseItem.get("todo_status"); 
			}
		});
		
		// Remove old items
		CourseItemStore.removeAll();
	
		// Load items for each course
		CourseStore.each(function(course){
			var code = course.get("code");
			console.log("Loading course " + code, course);
			
			var url = window.mobilenoppa.apiUrl + 'course/'+code+'/all';
			// filter by exercise group if there is one
			if (course.get("exerciseGroup")) {
			  url += "?group=" + course.get("exerciseGroup");
			}
		
			Ext.Ajax.request({
				url: url,
				success: function(response){
					var text = response.responseText;
					var json = Ext.JSON.decode(text);
					if (json && json.courseItems){
						// Loop through courseItems to add them to store
						for(var i=0;i<json.courseItems.length;i++){
							var jsonItem = json.courseItems[i];
							
							// Set the course id
							jsonItem["course_id"] = course.getId();
							
							// If item type is assignment, check for previous todo state
							if(jsonItem.type = "assignment"){
								var hash = jsonItem.course_id + jsonItem.title;
								if(todoStatusTemp[hash]){
									console.log("Restoring todo state",jsonItem,todoStatusTemp[hash]);
									jsonItem["todo_status"] = todoStatusTemp[hash];
								}
							}
							// Add the item to CourseItemStore
							var courseItem = CourseItemStore.add(jsonItem);
						}
						
						// Save the store to localstorage
						CourseItemStore.sync();
					}
					// Hide the loader spinner
					Ext.Viewport.setMasked(false);
				}
			});
		});
	}
}