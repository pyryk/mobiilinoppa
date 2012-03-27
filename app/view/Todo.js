Ext.define('MobileNoppa.view.Todo', {
  extend: 'Ext.List',
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