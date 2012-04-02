Ext.define('MobileNoppa.view.CourseSettings', {
    extend: 'Ext.Panel',
    config: {
      loadingText: "Loading courses...",
      layout: 'vbox',
      items: [
        {
          xtype: 'list',
          store: 'Courses',
          itemTpl: '{code} {name}',
          flex: 1,
        },
        {
          xtype: "formpanel",
          flex: 1,
          id: 'newcourseform',
          items: [
            {
              xtype: "fieldset",
              items: [
                {
                  xtype: "textfield",
                  label: "Course code",
                  name: 'code'
                },
                {
                  xtype: "textfield",
                  label: "Course name",
                  name: 'name'
                },
                {
                  xtype: "button",
                  alias: 'widget.newcourse',
                  id: 'add-new-button',
                  text: "Add",
                  ui: "action"
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