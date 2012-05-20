Ext.define('MobileNoppa.view.Todo', {
  extend: 'Ext.Panel',
	id: 'todo-panel',
    title: 'To-Do',
    iconCls: 'favorites',
    itemTpl: '{name} <span style="color: #bbb;">{date}</span>',
    config: {
      loadingText: "Loading courses...",
      layout: 'fit',
      items: [
        {
          xtype: 'courseitemlist',
		  id: 'todo-list',
          store: 'CourseItems',
          grouped: true,
          itemTpl: '<div class="courseItem assignment <tpl if="todo_status == true">done</tpl>">{title} <br><span class="description">{courseName}</span></div>',
        }
      ],
    },
    show: function() {
      this.callParent(arguments);
      console.log('todo shown');

      Ext.getStore('CourseItems').clearFilter();

      // Todo includes only assigments
      Ext.getStore('CourseItems').filter('type', 'assignment');

			if(window.mobilenoppa.showOldEvents === false){
	      Ext.getStore('CourseItems').filterBy(function(record, id) {
	        var today = new Date();
	        today.setHours(0,0,0,0);
	        return record.get('date') >= today;
	      });
			}
    }
});