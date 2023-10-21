foo();
function foo() {
    console.log('inside foo')
}
//function are hoisted


//function expression

var bar = function (n1,n2){
    console.log(n1+n2)
}
bar()

const fruits = ['banana', 'apple', 'strawberry', 'orange'];
const result = fruits.filter(function (elem, index, arr){
    return elem.includes('b');
})

const result2 = fruits
    .filter(elem => elem.includes('b'))
    .map(e=>e.length)
// .reduce(prev,c)




//spread operators

const arr1 = [1,2,3]
const str = 'Hi'
const arr2 = ['Bacha', 'Wondimu']
const arr3 = [...arr1, ...str, ...arr2]

console.log(arr3)





//destructuring
const person = {
    'fName':'Bacha',
    'lName':'Wondimu',
    ' my age':30,
    weight:73,
    foo:function (){
        console.log('person method')
    }
}

console.log(person['my age'])


const{fName:firstName, lName:lastName, age} = person;

console.log(firstName)

const department = 'admission';

person[department]=department
console.log(person)























