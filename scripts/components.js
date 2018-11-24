Vue.component ('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

/*
Not working

Vue.component ('link-item', {
    props: ['link'],
    template: '<li><a href={{ link.url }}>{{ link.text }}</a></li>'
    // template: '<li><a>{{ link.text }}</a></li>'
})
*/

let firstComp = new Vue({
    el: '#comp_test',
    data: {
        groceryList: [
            { id: 0, text: 'Eggplant' },
            { id: 1, text: 'Cheddar' },
            { id: 2, text: 'Kimchi'},
        ],
        tags: [
            { text: '<todo-item> [name of component]' }
        ],
        bindings: [
            { text: 'v-for="item in groceryList"' },
            { text: 'v-bind:todo="item"' },
            { text: 'v-bind:key="item.id" [optional?]' }
        ]
    }
})

let siteTitle = new Vue({
    el: '#site_title',
    data: {
        title: 'Components testing'
    }
})

let notComp = new Vue({
    el: '#not_comp',
    data: {
        groceryList: [
            { id: 0, text: 'Tortillas' },
            { id: 1, text: 'Taco seasoning' },
            { id: 2, text: 'Jalapenos' },
            { id: 3, text: 'Black beans' },
            { id: 4, text: 'Salsa' },
            { id: 5, text: 'Tomatoes' },
            { id: 6, text: 'Cabbage' }
        ],
        tags: [
            '<li>'
        ],
        bindings: [
            'v-for'
        ]
    }
})

let links = new Vue({
    el: '#links',
    data: {
        linkList: [
            { text: "Home page", url: "index.html" },
            { text: "Home page built with components", url: "index_components.html" }
        ]
    }
})