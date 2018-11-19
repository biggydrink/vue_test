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
        visibleList: [],
        catList: [
            'Kitties',
            'Cats',
            'Kittens',
            '고양이',
            '고양이 새끼'
        ],
        dogList: [
            'Doggo',
            'Pup',
            'Dogs',
            'Doge',
            '개'
        ],
        cats: true,
        textReversed: false,
        lede: "Here are some names for felines:",
        imgSrc: "To-infinity-and-beyond.jpeg",
        imgAlt: "cat in cardboard spaceship",
        imgTitle: "You, my friend, are responsible for delaying my rendezvous with star command!",
        buttonClass: 'button_cat',
        swapButton: {
            buttonText: 'See Dogs',
        },
        addButton: {
            buttonText: 'Add',
        },
        newItem: 'Add another name',
        reverseButton: {
            buttonText: 'Reverse',
        }
        
    },

    methods: {
        swap: function() {
            if (this.textReversed) {
                this.reverse();
            }
            if (this.cats) {
                this.visibleList = this.dogList;
                this.lede = "Here are some names for canines:";
                this.swapButton.buttonText = "See Cats";
                this.buttonClass = 'button_dog';
                this.imgSrc = "codedoge.jpg";
                this.imgAlt = "doge meme - coding: <doge>, hello world, much intelligent, many html, wow how skill, code doge thx, very computer, such programming, wow";
                this.imgTitle = "such title";
                this.cats = false;
                
                condition.buttonClass = this.buttonClass;
            } else {
                this.visibleList = this.catList;
                this.lede = "Here are some names for felines:";
                this.swapButton.buttonText = "See Dogs";
                this.buttonClass = "button_cat";
                this.imgSrc = "To-infinity-and-beyond.jpeg";
                this.imgAlt = "cat in cardboard spaceship";
                this.imgTitle = "You, my friend, are responsible for delaying my rendezvous with star command!!";
                
                this.cats = true;
                
                condition.buttonClass = this.buttonClass;
            }
        },
        reverse: function() {
            for (i = 0; i < list.visibleList.length; i++ ) {
                // TODO Strings are now unreversed when swapping, but should also make a way to have strings added while reversed reversed before adding

                /* 
                must use Vue.set instead of updating via list[index] so that Vue's getters/setters can run and get reactivity
                can also use push/pop
                https://medium.com/js-dojo/reactivity-in-vue-js-and-its-pitfalls-de07a29c9407
                This is also probably why the tutorial uses objects with a 'text' string attriute instead of a plain list of strings like i do here
                If you use objects and update the object.text attribute, then we have getters and setters again, and therefore reactivity
                */
                Vue.set(list.visibleList, i, list.visibleList[i].split('').reverse().join(''));
                
                this.textReversed ? this.textReversed = false : this.textReversed = true;
            }
        },
        add: function() {
            // this ends up also updating either catList or dogList, whichever is currently visible
            // How does it do that exactly? Must be because visibleList is set to equal either of those two lists in the swap function?
            this.visibleList.push(this.newItem);
        }
    }
});

// Gives visibleList an initial value
// Better to do this, or to set visible list = to the same strings as catList in the Vue instance data?
list.visibleList = list.catList;

let dynamic = new Vue({
    el: '#dynamo',
    data: {
        message: 'Type me'
    }
});

let condition = new Vue({
    el: '#conditional',
    data: {
        seen: true,
        buttonText: "Hide",
        buttonClass: list.buttonClass
    },
    methods: {
        hide: function() {
            
            if (this.seen) {
                this.seen = false;
                this.buttonText = "Unhide";
            } else {
                this.seen = true;
                this.buttonText = "Hide";
            }
        }
    }
});