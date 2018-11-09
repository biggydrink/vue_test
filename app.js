let text = new Vue({
    el: '#vue_text',
    data: {
        message: 'Text from Vue!',
        title: 'Hello!'
    }
});

let list = new Vue({
    el: '#list_and_array',
    data: {
        myList: [
            { text: 'Kitties'},
            { text: 'Cats'},
            { text: 'Kittens'},
            { text: '고양이'},
            { text: '고양이 새끼'}
        ]
    }
});

let hover = new Vue({
    el: '#vue_hover_text',
    data: {
        title: 'You, my friend, are responsible for delaying my rendezvous with star command!'
    }
});

let dynamic = new Vue({
    el: '#dynamo',
    data: {
        message: 'Type me'
    }
});

let condition = new Vue({
    el: '#v-if',
    data: {
        seen: true,
        button_txt: "Hide"
    },
    methods: {
        hide: function() {
            
            if (this.seen) {
                this.seen = false;
                this.button_txt = "Unhide";
            } else {
                this.seen = true;
                this.button_txt = "Hide";
            }
        }
    }
});