/* 
var is old version keyword for javascript
if we use var keyword of Javascript then it's can declare multiple time with same name
and this not showing you any error
*/

//example
var name = "Mr A";

var name ="Mr B";

console.log(name)


/* 
1. let & const is a Javascript new feature and We can use call them block scope declaration keyword
2. when we use let keyword then we can't create another variable with same name let's see a example
*/

let age =23;
//Note: remove the back slash before let

// let age =24; // this show you a Syntax error like this "SyntaxError: Identifier 'age' has already been declared"

/* 
Now let see about const 

const is a es6 feature I told you before 
1. If we declare any variable with const keyword then we can't change it's value
2. If we declare any array or object then we can we change it's property values
3. const full name is constant so is can't changeable in primitive data type but can changeable in Reference data type
4. You can't create another variable with same name what we do with var keyword

let's see a example:
*/



/* 
 this the way how to declare a variable with const keyword
*/
const constantValue = "Mamun";


/* 
NOTE: remove // before const keyword for see output:
you can't create variable with name name.
example:
*/

//const constantValue= 'Mr Mamun' //this line show you SyntaxError: Identifier 'constantValue' has already been declared

/* 
 NOTE: Remove The // before constantValue for see output
 you can't change it's value
 Example:
*/

//constantValue ="Mr B" //this line show this error TypeError: Assignment to constant variable


