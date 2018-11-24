// TODO replace all of the below, integrating components

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

let links = new Vue({
    el: '#links',
    data: {
        linkList: [
            { text: "Home Page", url: "index.html" },
            { text: "Components Testing", url: "components.html"}
        ]
    }
})


let list = new Vue({
    el: '#list_and_array',
    data: {       
        cats: {
            selected: true,
            textReversed: false,
            lede: 'Here are some names for felines:',
            imgSrc: 'images/To-infinity-and-beyond.jpeg',
            imgAlt: 'cat in cardboard spaceship',
            imgTitle: 'You, my friend, are responsible for delaying my rendezvous with star command!',
            buttonClass: 'button_cat',
            swapButtonText: 'See Dogs',
            newItem: 'New kitty',
            catList: [
                'Kitties',
                'Cats',
                'Kittens',
                '고양이',
                '고양이 새끼'
            ]
        },
        dogs: {
            selected: true,
            textReversed: false,
            lede: 'Here are some names for canines:',
            imgSrc: 'images/codedoge.jpg',
            imgAlt: 'doge meme - coding: <doge>, hello world, much intelligent, many html, wow how skill, code doge thx, very computer, such programming, wow',
            imgTitle: 'such title',
            buttonClass: 'button_dog',
            swapButtonText: 'See Cats',
            newItem: 'New doggy',
            dogList: [
                'Doggo',
                'Pup',
                'Dogs',
                'Doge',
                '개'
            ]
        },

        // Initialized with created hook
        visibleList: [],
        lede: '',
        imgSrc: '',
        imgAlt: '',
        imgTitle: '',
        buttonClass: '',
        swapButton: {
            buttonText: '',
        },
        addButton: {
            buttonText: 'Add',
        },
        newItem: '',
        reverseButton: {
            buttonText: 'Reverse',
        }
    },
    created: function() {
        // Initializes main data from cats
        this.visibleList = this.cats.catList;
        this.lede = this.cats.lede;
        this.imgSrc = this.cats.imgSrc;
        this.imgAlt = this.cats.imgAlt;
        this.imgTitle = this.cats.imgTitle;
        this.newItem = this.cats.newItem;
        this.buttonClass = this.cats.buttonClass;
        this.swapButton.buttonText = this.cats.swapButtonText;
    },

    methods: {
        swap: function() {
            // Swaps data between cat and dog objects
            if (this.cats.selected) {
                if (this.cats.textReversed) {
                    this.reverse();
                }

                this.dogs.selected = true;
                this.cats.selected = false;

                this.cats.catList = this.visibleList;
                this.visibleList = this.dogs.dogList;

                this.lede = this.dogs.lede;
                this.swapButton.buttonText = this.dogs.swapButtonText;
                this.buttonClass = this.dogs.buttonClass;
                this.imgSrc = this.dogs.imgSrc;
                this.imgAlt = this.dogs.imgAlt;
                this.imgTitle = this.dogs.imgTitle;
                this.newItem = this.dogs.newItem;
            } else {
                if (this.dogs.textReversed) {
                    this.reverse();
                }

                this.cats.selected = true;
                this.dogs.selected = false;

                this.dogs.dogList = this.visibleList
                this.visibleList = this.cats.catList;

                this.lede = this.cats.lede;
                this.swapButton.buttonText = this.cats.swapButtonText;
                this.buttonClass = this.cats.buttonClass;
                this.imgSrc = this.cats.imgSrc;
                this.imgAlt = this.cats.imgAlt;
                this.imgTitle = this.cats.imgTitle;
                this.newItem = this.cats.newItem;
            }
        },
        reverse: function() {
            // Rerverses everything currently in visible list. Updates either cat or dog textReversed flag
            for (i = 0; i < list.visibleList.length; i++ ) {
                /* 
                must use Vue.set instead of updating via list[index] so that Vue's getters/setters can run and get reactivity
                can also use push/pop
                https://medium.com/js-dojo/reactivity-in-vue-js-and-its-pitfalls-de07a29c9407
                This is also probably why the tutorial uses objects with a 'text' string attriute instead of a plain list of strings like i do here
                If you use objects and update the object.text attribute, then we have getters and setters again, and therefore reactivity
                */

                Vue.set(list.visibleList, i, reverseString(list.visibleList[i]));
            }
            
            if (this.cats.selected) {
                this.cats.textReversed ? this.cats.textReversed = false : this.cats.textReversed = true;
            } else {
                this.dogs.textReversed ? this.dogs.textReversed = false : this.dogs.textReversed = true;
            }
        },
        add: function() {
            // Adds current newItem to the current visible list
            // this ends up also updating either catList or dogList, whichever is currently visible
            // How does it do that exactly? Must be because visibleList is set to equal either of those two lists in the swap function?
            
            if ((this.cats.selected && this.cats.textReversed) || (this.dogs.selected && this.dogs.textReversed)) {
                this.visibleList.push(reverseString(this.newItem));
            } else {
                this.visibleList.push(this.newItem);
            }

            if (this.cats.selected) {
                this.cats.newItem = this.newItem;
            } else {
                this.dogs.newItem = this.newItem;
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

/**
 * 
 * @param {String} toReverse
 * String that you want to reverse
 * 
 * This function returns the reverse of the string you pass it.
 * Example: 'Hello World!' will return '!dlorW olleH'
 */
let reverseString = function(toReverse) {

    return toReverse.split('').reverse().join('');

}