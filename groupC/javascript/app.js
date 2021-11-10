console.log("hello");

// //alerts message on the page
// alert("you suck");

// //asks yes or no question
// confirm("do you realize you suck?");

// //promts user for input
// prompt("why do you suck so bad?");

function tellFortune(){
    var fortune = new Array('money',
                            ' to travel',
                            'a new car','a new house',
                            ' finding love','death',
                            ' become homeless',
                            'nothing');
        var random= fortune[Math.floor(Math.random()*fortune.length)];
        document.getElementById('btn').innerHTML= "your fortune is" + " " + random ;
    }
    tellFortune();