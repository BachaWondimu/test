const Person = {
    fname: 'John',
    sayHi: function() {
        console.log('Welcome,', this.fname);
    },
    say: function() {
        console.log('Hello!');
    }
};

//Person.sayHi();  // Output: Welcome, John
//Person.say();    // Output: Hello!




//setTimeout(Person.sayHi(), 3000)
setTimeout(Person.sayHi.bind(Person),1000)
setTimeout(()=>Person.sayHi(), 1000)



















