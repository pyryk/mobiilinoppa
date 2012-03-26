window.mobilenoppa = {};
window.mobilenoppa.views = {};

window.mobilenoppa.app = Ext.application({
    name: 'MobileNoppa',
    launch: function() {
      var views = window.mobilenoppa.views;
      
      views["calendar"] = Ext.create('Ext.List', {
          store: {
              fields: ['date','name'],
              data: [
                  {name: 'WWW Applications', date: new Date()},
                  {name: 'Experimental UIs', date: new Date()},
                  {name: 'Studio X', date: new Date()},
                  {name: 'Talking Technology', date: new Date()}
              ]
          },
          title: 'Calendar',
          iconCls: 'time',
          itemTpl: '{name} <span style="color: #bbb;">{date}</span>'
      });
      
      views["todo"] = Ext.create('Ext.List', {
          store: {
              fields: ['date','name'],
              data: [
                  {name: 'Experimental UIs assignment 2', date: new Date()},
                  {name: 'Studio X business model canvas', date: new Date()},
                  {name: 'Studio X prototype', date: new Date()},
                  {name: 'WWW Applications prototype', date: new Date()}
              ]
          },
          title: 'To-Do',
          iconCls: 'favorites',
          itemTpl: '{name} <span style="color: #bbb;">{date}</span>'
      });
      
      views["courses"] = Ext.create('Ext.form.Panel', {
          fullscreen: true,

          items: [{
              xtype: 'fieldset',
              items: [
                  {
                      xtype: 'textfield',
                      name : 'course',
                      label: 'Course'
                  },
                  {
                      xtype: 'textfield',
                      name : 'course',
                      label: 'Course'
                  },
                  {
                      xtype: 'textfield',
                      name : 'course',
                      label: 'Course'
                  }
              ]
          }],
          title: 'Settings',
          iconCls: 'settings',
      });
      
      views["titlebar"] = Ext.create('Ext.Toolbar', {
        title: 'Mobile Noppa',
        docked: 'top'
      });
      
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',
            title: "Mobile Noppa",
            items: [
              views['titlebar'],
              
              // tabbed views
              views['calendar'],
              views['todo'],
              views['courses'],
            ]
        });
    }
});