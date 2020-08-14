






//destructuring 


/* 
  
What is destructuring? 
Answer: 
The destructuring assignment syntax is a JavaScript expression that makes it
possible to unpack values from arrays, or properties from objects, into distinct variables

example:
*/

//Array Destructuring
let arr = [1,2,3,4,5];



// let [nipu,two,three,four,five] = [1,2,3,4,5];

// console.log(nipu,two)


//Object Destructuring

const nestesd= [
    {
    name:"Sharuk Khan",
    occupation:"Film Actor",
    age:53
   },
   {
      name: "Bill Gates",
      occupation:"Founder",
      age:64,
      address:[
          {
          present_address:{
              city:"Miami"              },
              country:"Usa",
              zip_code:"222"
             }
        ]
   },
   {
       name:"Amir Khan",
       occupation:"Film star"
   }

]



const [sharukkhan,bill_gates,amirkhan] = nestesd;

const {name,address} = bill_gates

console.log(name,address[0].present_address,amirkhan)
