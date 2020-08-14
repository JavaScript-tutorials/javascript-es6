// you can choose any one way if you want 
const a_way__declare_array=[1,2,3,4];
const another_way_array = Array(1,2,3,4);


console.log(a_way__declare_array)

console.log(another_way_array)

/* 
How to add value in array?
*/

//step -1: create a array
const fruits=[]
//step -2: add value using push method
fruits.push(1)
fruits.push(2)
fruits.push(5)

console.log(fruits) //your output will be [1,2,5]

/* How can I check Index of array? */

console.log(fruits.indexOf(1)); //output 0
console.log(fruits.indexOf(2)); //output 1
console.log(fruits.indexOf(5)); //output 2


/* How can I remove a value from array */

console.log("Removed index 2 I mean last index",fruits.pop())
console.log("Now you have these value in your array",fruits) //if you remove it's will delete las value of array using pop method



/* How can check array length */

console.log(fruits.length) //it's will show array length


/* 
Task:
use these methods with array and know how to work they are

concat()
constructor
copyWithin()
entries()
every()
fill()
filter()
find()
findIndex()
forEach()
from()
includes()
indexOf()
isArray()
join()
keys()
length
lastIndexOf()
map()
pop()
prototype
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
sort()
splice()
toString()
unshift()
valueOf()


*/
