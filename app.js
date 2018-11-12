let mainTitle = new Vue({
    el: '#main_title',
    data: {
        title: 'Vue Tests'
    }
});

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
        ],
        cats: true,
        lede: "Here are some names for felines:",
        buttonName: 'See Dogs',
        buttonClass: 'button_cat',
        imgSrc: "To-infinity-and-beyond.jpeg",
        imgAlt: "cat in cardboard spaceship",
        imgTitle: "You, my friend, are responsible for delaying my rendezvous with star command!",
    },

    methods: {
        swap: function() {
            if (this.cats) {
                this.myList = [
                    {text: 'Doggo'}, 
                    {text: 'Pup'}, 
                    {text: 'Dogs'}, 
                    {text: 'Doge'},
                    {text: '개'}
                ];
                this.lede = "Here are some names for canines:";
                this.buttonName = "See Cats";
                this.buttonClass = "button_dog";
                this.imgSrc = "codedoge.jpg";
                this.imgAlt = "doge meme - coding: <doge>, hello world, much intelligent, many html, wow how skill, code doge thx, very computer, such programming, wow";
                this.imgTitle = "such title";
                this.cats = false;
                
                condition.buttonClass = this.buttonClass;
            } else {
                this.myList = [
                    { text: 'Kitty'},
                    { text: 'Cat'},
                    { text: 'Kitten'},
                    { text: '고양이'},
                    { text: '고양이 새끼'}
                ];
                this.lede = "Here are some names for felines:";
                this.buttonName = "See Dogs";
                this.buttonClass = "button_cat";
                this.imgSrc = "To-infinity-and-beyond.jpeg";
                this.imgAlt = "cat in cardboard spaceship";
                this.imgTitle = "You, my friend, are responsible for delaying my rendezvous with star command!!";
                this.cats = true;
                
                condition.buttonClass = this.buttonClass;
            }
        },
        reverse: function() {
            for (i = 0; i < list.myList.length; i++ ) {
                list.myList[i].text = list.myList[i].text.split('').reverse().join('');
            }
        }
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
        button_txt: "Hide",
        buttonClass: list.buttonClass
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