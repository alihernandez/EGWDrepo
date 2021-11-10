function getAge() {
    let mes= prompt("what is your name?");
    alert(`Hello ${mes}`);
}

getAge();

function sayHello() {
    let mes1= prompt("what is your name?");
    document.getElementById("demo-6").innerHTML= "Hello " + mes1;
}
sayHello(); 

function toCelsius(f) {
    return (5/9) * (f-32);
}

document.getElementById("demo-0").innerHTML = toCelsius(77);
document.getElementById("demo-1").innerHTML = toCelsius(35);
document.getElementById("demo-2").innerHTML = toCelsius(20);

function calculateDeg(num) {
    
    
    var degree= document.getElementById("deg").value;
    var tempCalc= (5/9) * (degree-32);
    console.log("It is currently " + tempCalc + " degrees in farenheight!!");

document.getElementById("celDeg").innerHTML= Math.round(tempCalc);
};

