/* 
 Javascript has mainly two types of datatype and they are
 1. Primitive Datatype
 2. Reference Datatype

 There 

 what is primitive datatype?
 Answer: In JavaScript, a primitive (primitive value, primitive data type)
         is data that is not an object and has no methods. There are 
         6 primitive data types: string, number, bigint, boolean, 
         undefined, and symbol
 What is Reference Datatype?
 Answer: Simple we can What can access by Reference variable it's called reference type data type
*/


/* 
let see example:
*/

let number = 1 // Number type

//let's check it 

console.log(typeof number)  //it will show you "number" as a output

let stringValue = "This is a string" //sting data type

//let's check it 

console.log(typeof stringValue) //it will show you this output "string"

let isActive = true; // it's a boolean datatype

//let's check it

console.log(typeof isActive) //it's show as a output "boolean"

let donot_know_what_should_be_here=null; //Null datatype

console(typeof donot_know_what_should_be_here) //it's show you Object datatype because null is one kind of object


let I_do_not_want_define_now=undefined; //undefine datatype

console.log(typeof I_do_not_want_define_now) //it will show as output undefined


/* 
Now let see Reference datatype
*/ 

let person = [1,2,3,4,5];

console.log(Array.isArray(person)) //it will show as a output true
console.log(typeof person) //it will show you object because person is a one kind of object in js


// let's see another example

const persons=[
    {
        name:"Nipu",
        age:23,
        profession:"Programmer",
        designation:"Fullstack developer"
    },
    {
        name:"Fardin",
        age:23,
        profession:"Programmer",
        designation:"Fullstack developer"
    },
    {
        name:"Mr bin",
        age:44,
        profession:"Comedian",
        designation:"Profession"
    },
];

//this gonna call nested array object so let's check it

console.log(typeof persons) //it'll show you as output Object
console.log(Array.isArray(persons)) //it's will show you as true


//let's deep into Object datatype


let phone_book={
  phone_number:"01827263486",
  name:"John Hello",
}

console.log(typeof phone_book) //it will show you as a output "Object"

//let's see how can we create a nested array

let phone_books={
    person1:{
        phone_number:"01827263486",
        name:{
            firstName:"John",
            lastName:"Doe"
        } 
    },
    person2:{
        phone_number:"01798306639",
        name:{
            firstName:"Nk",
            lastName:"Chak"
        } 
    },
}


//let's check it

console.log(typeof phone_books) //it's will show you as a output "Object"











