// function cashRegister(cart) {
//     var items = Object.keys(cart); //array of items by key
//     var sum = 0;

//     for (var i= 0; i < items.length; i++) {
//         var itemName = items[i];
//         var itemPrice = cart[itemName];
//         sum += Number.parseFloat(itemPrice);
//         }

//         return sum;
// }

// document.getElementById("btn").innerHTML = cashRegister(cart);

// console.log(cashRegister(cart));

// var money = 1500.00;
// var bills = 2500.00;
// if (money > bills || money ===bills){
//     console.log('You are covered!')
// }
// else if (money === bills || money < 2000){
//     console.log('you are good, just barely')
// }
// else { console.log('uh-oh!')
// };

// function assignGrade(score){
//     if (score>90){
//         return 'A';
//     }else if (score > 80){
//         return 'B';
//     }else if (score> 70) {
//         return 'C';
//     }else if (score> 60) {
//         return 'C';
//     }else if (score> 50) {
//         return 'D';
//     }else if (score> 40) {
//         return 'F';
//     }};

var score = 82;

switch (true) {
  case (score > 90):
    console.log("You got an A.");
    break;

  case(score > 80):
    console.log("You got a B.");
    break;

  case(score > 70):
    console.log("You got a C.");
    break;

  case(score > 60):
    console.log("You got a D.");

  default:
    console.log("You failed");
}
