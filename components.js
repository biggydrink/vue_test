Vue.component ('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

let firstComp = new Vue({
    el: '#comp_test',
    data: {
        groceryList: [
            { id: 0, text: 'Eggplant' },
            { id: 1, text: 'Cheddar' },
            { id: 2, text: 'Kimchi' }
        ]
    }
})

let siteTitle = new Vue({
    el: '#site_title',
    data: {
        title: 'Components testing'
    }
})