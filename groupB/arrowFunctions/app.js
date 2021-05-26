
//use strict
'use strict';
//enclosed in single quotes
//ends with a semicolon 

//template literal/strings 
const firstName = 'Jane';
document.write(`Hello ${firstName}
How are you
today?`);
//enclosed in backticks //next to the 1 key//
//${}


// Output:
// Hello Jane!
// How are you
// today?

const food= 'pasta';
const beverage= 'Pepsi';
const likeDessert= false;
//🌺//Do this
window(`Food: ${food} Drink: ${beverage} ${likeDessert}`); 

// const character= "sonic";
// const powers= "super fast";
// const color= "blue";
// const speed= 1000; 
// console.log(); 
const character= "Goku";
const abilities= "God like abilities";
const suit= "Blue and Orange";
const power= "Over nineThousand!";
console.log(`${character}  has   ${abilities}  his kit is   ${suit} his power level is ${power}`); 


const characters= "Hulk";
const powers= "superhuman strength";
const color= "green";
const speed= 400;
console.log(`characters: ${characters}\n\ powers: ${powers}\n\  color: ${color} speed: ${speed}`);


// const let 
function varTest() {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
   
  function letTest() {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }

  //🌺//Do this
  const i = 0
if (true) {
  let m = 1;
  let j= 2; 
  console.log(i + j); 
}

//ternary operators
var age = 26;
var drink = (age >= 21) ? "Beer" : "Juice";
console.log(drink); // "Beer"

//condition //if //else 

//🌺//Do this
// condition ? value if true : value if false
// ? (if)   : (else) (else if)
var birthYear= console.log("What year were you born?");
if (birthYear > 1997 || birthYear < 2020) {
    console.log("You are in Gen Z")

} else {
    console.log("you inched by")
};
const birthYear2= 1988;
const legal= (birthYear2 > 1997 || birthYear2 < 2020) ? "You are a millennial" : "You are Gen Z";
console.log(legal); 
//arrow functions

// Traditional Function
function sample (a){
    return( a + 100);
    
}
    
  // Arrow Function Break Down
  
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  (a) => {
    return a + 100;
  }
  
  // 2. Remove the body brackets and word "return" -- the return is implied.
  (a) => a + 100;
  
  // 3. Remove the argument parentheses
  a => a + 100;

  //🌺//do this without parameters
  var hello;

  

 //🌺//do this with parameters
 function sum(param1, param2) {
    if (param2 === undefined) {
      param2 = 0;
    }
    return param1 + param2;
  }
  
  sum(1); // => 1


        
  //Array methods

  //.from
// let prices = [500, 700, 1000];
// let taxed = Array.from(prices, price => price * 1.05);
// console.log(taxed);
// //create temp variable  multipling the item by 1.05 5%
// // // [525, 735, 1050]

// //.fill
// //overrides anything in the array with .fill 
// let prices = [500, 700, 1000];
// prices.fill(2000);
// console.log(prices);
 
// // // Array [ 2000, 2000, 2000 ]
// //similar to a .splice 
// let prices = [500, 700, 1000];
// prices.fill(2000, 1);
// console.log(prices);
 
//fill from the index
// // Array [ 500, 2000, 1000 ]

// let prices = [500, 600, 700, 800, 900, 1000, 1500];
// let result = prices.find(price => price > 777);
// console.log(result);
 
// // 800

// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

//.map  //for loop 
//creates the new array with the new results as the original 
// const sweetArray = [2, 3, 4, 5, 35]
// const sweeterArray = sweetArray.map(sweetItem => {
//     return sweetItem * 2
// })

// console.log(sweeterArray)

// 4, 6, 8, 10, 70