Ext.define('MobileNoppa.view.AddNew', {
    extend: 'Ext.Panel',
    xtype: 'addnewcourse',
    config: {
      loadingText: "Loading courses...",
      layout: 'fit',
      items: [
        {
          xtype: "formpanel",
          flex: 1,
          id: 'newcourseform',
          items: [
            {
              xtype: "fieldset",
              title: "Add a course",
              items: [
                {
                  xtype: "textfield",
                  label: "Code",
                  name: 'code'
                },
                {
                  xtype: "textfield",
                  label: "Name",
                  name: 'name'
                },
                {
                  xtype: "textfield",
                  label: "Exercise group",
                  name: 'exerciseGroup',
                  placeHolder: 'Optional'
                },
                {
                  xtype: "button",
                  alias: 'widget.newcourse',
                  id: 'add-new-button',
                  text: "Add",
                  padding: 5,
                  margin: 20,
                  ui: "action"
                },
                {
                  xtype: "button",
                  alias: 'widget.back',
                  id: 'back-to-course-list-button',
                  text: "Cancel",
                  padding: 5,
                  margin: 20,
                },
              ]
            }
          ]
        }
      ],
    },
    title: 'Settings',
    iconCls: 'settings',
});