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
              title: "Search for a course",
              items: [
                {
                  xtype: "searchfield",
                  label: "Search",
                  name: 'query',
                  id: 'search-course-field'
                },
                {
                  xtype: 'list',
                  id: 'course-autocomplete',
                  store: 'CourseAutocomplete',
                  itemCls: 'autocomplete-list',
                  itemTpl: '{code} {name}',
                  emptyText: 'No results',
                  padding: 0,
                  scrollable: false,
                }
              ],
            },
            {
              xtype: "fieldset",
              title: "Or enter info manually",
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