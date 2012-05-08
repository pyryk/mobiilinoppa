Ext.define('MobileNoppa.controller.Todo', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            todoList: '#todo-list'
        },
        control: {
          todoList: {
            itemtap: 'changeTodoState'
          }
        }
    },
    changeTodoState: function(list, index, target, record, event, eOpts) {
    	console.log("changeTodoState");

		var current = record.get("todo_status");
		if(current == true){
			console.log("Set todo_status to false");
			record.set('todo_status',false);
		} else {
			record.set('todo_status',true);
		}
		
		// Save the changes to store
		record.save()
		// Update localstorage
		Ext.getStore('CourseItems').sync();
		// Refresh list component (should be done automatically, but seems buggy)
		this.getTodoList().refresh();
    }
});