function foo(){
    console.log("inside foo")
    let number = 10
    console.log(typeof (number))
}
foo();

function number() {
console.log("Hello")
}

console.log(number)

//Strings
const str1 = 'I"m Bacha'
const str2= "I'm Bacha"
const str3 = `
I am Bacha, and I love playing volleyball.
It is definately fun!
`

console.log(str1+"\n"+str2,str3)


//arrays
//use push instead of assigning at a position like arr[10]=90
//push - pop - it will mimic as a stack
//shift - unshift - it will mimic a que

const fruits = ['banana', 'apple', 'strawberry', 'orange'];
console.log('unshift')
console.log(fruits)
fruits.unshift('pear');
console.log(fruits)
console.log('shift')
console.log('=============================================')
console.log(fruits)
fruits.shift()
console.log(fruits)

//higher order function
const result = fruits.filter(function (elem, index, arr){
    return elem.includes('b');
})

const result2 = fruits
    .filter(elem => elem.includes('b'))
    .map(e=>e.length)
    // .reduce(prev,c)






















