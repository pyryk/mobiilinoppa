Ext.define('MobileNoppa.controller.CourseSettings', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            form: '#newcourseform',
            button: '#add-new-view-button',
            view: '#course-settings-view',
            search: '#search-course-field',
            autocompletelist: '#course-autocomplete',
            courselist: '#course-list',
        },
        control: {
            '#add-new-button': {
                tap: 'addNew'
            },
            '#add-new-view-button': {
              tap: 'displayAddNew'
            },
            '#back-to-course-list-button': {
              tap: 'displayCourseList'
            },
            '#search-course-field': {
              keyup: 'searchCourses',
              clearicontap: 'clearSearch'
            },
            '#course-autocomplete': {
              itemtap: 'courseSelected'
            },
            '#course-list': {
							itemtap: function(container,index,target,record,e,eOpts){
								if (e.getTarget('.x-list-disclosure')) {
									console.log("Disclosure clicked!");
									this.removeCourse(record);

								} else {
									console.log("Item clicked!");
									this.openCourseWebpage(record);
								}
							}
						}
        }
    },
    launch: function() {
      this.callParent();
      console.log("coursesettings launch");
      //Ext.getStore("Courses").load();
    },
    init: function() {
      this.callParent();
      console.log("coursesettings init");
    },
    searchCourses: function(field) {
      var val = field.getValue();
      console.log('search courses with', val);
      
      var app = this;
      var CourseAutocomplete = Ext.getStore('CourseAutocomplete');
      CourseAutocomplete.removeAll();
      
      // dont search with less than 3 characters
      if (val.length > 2) {
        var url = window.mobilenoppa.apiUrl + 'search/'+val+'';
        Ext.Ajax.request({
  				url: url,
  				success: function(response){
  				  if (val != field.getValue()) {
  				    console.log('old request - not updating the view');
  				    return;
  				  }
  					var text = response.responseText;
						var json = Ext.JSON.decode(text);
						var view = app.getView('#course-autocomplete');
						//view.items = [];
						for (var i in json) {
						  console.log('adding course',json[i]);
						  var course = CourseAutocomplete.add(json[i]);
						}
						var height = Math.max(json.length*47-1, 0);
						
						console.log("Success",json);
  				},
  				failure: function(response){
  				  console.log("Failure",response);
  				}
  			});
      }
    },
    courseSelected: function(list, index, target, record, event) {
      window.args = arguments;
      console.log('Course el tapped', arguments);
      console.log(record.get('code'));
      this.getForm().setRecord(record);
      this.clearSearch();
    },
    clearSearch: function() {
      this.getForm().setValues({
        query: ''
      });
      Ext.getStore('CourseAutocomplete').removeAll();
    },
    displayCourseList: function(btn) {
      console.log('displaying the course list');
      this.getView('#course-settings-view').setActiveItem(0);
    },
    displayAddNew: function(btn) {
      console.log('displaying the add new form');
      this.getView('#course-settings-view').setActiveItem(1);
      this.getForm().reset();
    },
    addNew: function() {
      var course = Ext.create('MobileNoppa.model.Course', this.getForm().getValues());
      var store = Ext.getStore('Courses');
      store.add(course);
      store.sync();
      this.getForm().reset();
      
      // display the list
      this.getView('#course-settings-view').setActiveItem(0);
      
      console.log("added a new course");
      
      window.refreshCourseData();
    },
    removeCourse: function(record) {
      Ext.Msg.confirm("Are you sure?", "Are you sure you want to remove this course", function(val) {
        if (val === "yes") {
          var store = Ext.getStore('Courses');
          store.remove(record);
          store.sync();
          
          window.refreshCourseData();
        }
      });
    },
	openCourseWebpage: function(record) {
		console.log("openCourseWebpage");
		var url = "https://noppa.aalto.fi/noppa/kurssi/" + record.data.code;
		console.log(url);
		
		// Tric to open the web page in Safari if we are using iOS web app
		var a = document.createElement('a');
		a.setAttribute("href", url);
	    a.setAttribute("target", "_blank");

	    var dispatch = document.createEvent("HTMLEvents")
	    dispatch.initEvent("click", true, true);
	    a.dispatchEvent(dispatch);
		
	}
});