
class Vehicle{
   //create array object here 
   vehicles=[
     {
       model_name:"1234",
       price:"20usd"
     },
     {
       model_name:"5678",
       price:"20usd",
       year:2020,
     }
   ];

   get_modelNumber() {
     return this.vehicles[this.vehicles.length-1].model_name

    

   }

}




class Ferrari extends Vehicle{ 

  //step 1: create ferrari class
  // step 2: extends the Vehicle class so that I can access the whole properties and method of Vehicles class
  // step 3: I add a property  in Vehicle class by Ferrari class 
  // step 4: when we extend any class we have call constructor function must be and into the constructor we have call super method because it's 
  // help to access everting extend class properties and method 

  constructor(){
    super()
    this.vehicles.push({name:"Ferrari",model_name:123456789})
    this.vehicles.push({name:"Honda",model_name:67543})
  }


}





const f = new Ferrari()




//rest parameter/ argument

//When We need multiple argument and wen don't know how much argument we need  in function

const fruits=(...names)=>{
  return names
}


console.log(fruits("Apple","orange","Pineapple"))

//When We going merge array or object in a one variable then need to use spread operator
//spread operator
const arr1=[1,2,3,4,5]

const arr2=[...arr1,6,7,8,9]


console.log(arr2)




