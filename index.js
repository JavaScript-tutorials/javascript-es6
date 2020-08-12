

// // arrow function


// //regular function
// function myFunction1(arg){
//   return arg
// }

// //arrow function

// const myFunction2 =arg=>arg

// console.log(myFunction1('Hello world'))
// console.log(myFunction2("John doe"))



// // rest operator

// const rest=(...arg)=>arg;

// console.log(rest(1,2,4,5,"Jhon",'cat'))

const arr1=[1,2,3,4];
const arr2 = [5,6,7,8];

const mergeArray= [ ...arr1, ...arr2];

const evenNumber = mergeArray.map((data,index)=>{
  if(data%2==0){
    console.log('even number',data)
  }
})





/**
 * @param str1:string;
 * @param str2:string;
 * @method isAnagram(str1,str2)
 * @return string
 **/

export const isAnagram = (str1, str2) => {
  console.log(`Hello sir! your first input string is :=> ${str1}`);

  console.log(`Hello sir! your second input string is :=> ${str2}`);

  const step1 = str1.split("").sort().join("").toLowerCase();

  const step2 = str2.split("").sort().join("").toLowerCase();

  if (step1 === step2)
    return `Your input string ${str1} and ${str2} are checked and it's anagram`;

  return `Sorry! your input strings are ${str1} and ${str2} are checked and it's not anagram`;
};

//Here is example:-
console.log(isAnagram("table", "bleat"));
console.log(isAnagram("eat", "tar"));