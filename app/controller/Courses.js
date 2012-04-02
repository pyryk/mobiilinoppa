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
		
		var CourseStore = Ext.getStore('Courses');
		var CourseItemStore = Ext.getStore('CourseItems');
		
		var course = CourseStore.data.last();
		if (course){
		
			CourseStore.each(function(item){
				var code = item.get("code");
				console.log("Loading course" + code);
				
				Ext.Ajax.request({
					url: 'http://verkel.iki.fi:8080/'+code+'/all',
					success: function(response){
						var text = response.responseText;
						var json = Ext.JSON.decode(text);
						//console.log(text,json);
						if (json && json.courseItems){
							CourseItemStore.add(json.courseItems);
						}
					}
				});
			});	
		}
		
		CourseItemStore.sync();
    }
});