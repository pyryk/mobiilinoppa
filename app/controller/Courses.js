Ext.define('MobileNoppa.controller.Courses', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            calendar: 'widget.calendar',
            loadButton: 'button[action=loadCourseItems]'
        },
        control: {
            loadButton: {
                tap: 'loadCourseItems'
            }
        }
    },
    launch: function() {
      this.callParent();
      console.log("launch");
      //Ext.getStore("Courses").load();
    },
    init: function() {
      this.callParent();
      console.log("[MobileNoppa.controller.Courses] init");
      //this.loadCourseItems();
    },
    loadCourseItems: function() {
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
});