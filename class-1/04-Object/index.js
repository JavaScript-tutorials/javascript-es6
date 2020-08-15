
const personObject ={name:"Mac Jhon", age:24, profession:"Software Developer"}

console.log(personObject)


const nestedObject = {
    person1:{
        name:"Jack",
        profession:"Sr Developer",
        address:{
            present_address:{
                city:"Dhaka",
                country:"Bangladesh",
                zip:4400,
            },
            permanent_address:{
                city:"Chittagong",
                country:"Bangladesh",
                zip:9977,
            }
        },

    },
    person2:{
        name:"Mack",
        profession:"Sr Developer",
        address:{
            present_address:{
                city:"Chicago",
                country:"Usa",
                zip:4400,
            },
            permanent_address:{
                city:"New York",
                country:"Usa",
                zip:784734,
            }
        },

    }
}

//if wanna test this code then you have to uncomment one by one

console.log(nestedObject)
console.log(nestedObject.person1)
console.log(nestedObject.person2)
console.log(nestedObject.person2.age)

console.log(nestedObject.person2.address)

console.log(nestedObject.person2.address.present_address)
console.log(nestedObject.person2.address.present_address.city)
console.log(nestedObject.person2.address.permanent_address)
console.log(nestedObject.person2.address.permanent_address.city)


///Home work for practice

//
// Object.keys()
// Object.values()
// Object.entries()
// Object.assign()
// Object.freeze()
// Object.seal()
// Object.getPrototypeOf()

