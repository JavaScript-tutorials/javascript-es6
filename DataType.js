// //those primitive data type

// const number = 1.0; //Number;
// const name = "Mr bin"; //String
// const ID = "N096557";
// const isActive = false;

// const isNull = null;
// const isUndefined= undefined;





// //pointer is way that indicate memory address


// // console.log(typeof number)
// // console.log(typeof name)
// // console.log(typeof ID)
// // console.log(typeof isActive)
// // console.log(typeof isNull) 
// // console.log(typeof isUndefined)


// //Reference type data type
// //1.Object (important)
// //2.Array

// //var , const ,let

// let person = {
//     name:"Charli Chaplin",
//     age:41,
//     color: "brown"
// }

// // const people = "mr bin";

// // const person ={
// //   name:"Mr bin"
// // }

// // person.name="Charli chaplin";
// // console.log(person)

// const arr=[5,6,7,'class 1' , 'class 2','apple',"orange"];

// const arr1 = [
//     {
//         name:"Nipu Chakraborty",
//         age:23,
//         post:"Fullstack Developer",
//         education:"Bsc In CSE",
//         university:"Southeast University"
//     },
//     {
//         name:"Brianna Flemings",
//         age:24,
//         post:"Web Project Coordinator",
//         education:"BS in Computer Science",
//         university:"St. Thomas University"
//     }
// ];

// const names=[]

// for(let info of arr1){
//     names.push(info.name)
// }


// console.log(names)









function lightOn_and_OFF(light){

    switch(light){
        case "OFF":
            return console.log("light is off")
        case "ON":
            return console.log("light on")
        default: 
          return false
        
    }
}


console.log(lightOn_and_OFF('OFF'))

