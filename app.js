// Chapter 26-30
// Q.1
var num_$ = parseInt(prompt("Enter postive integer Number"));
document.write("Number: " +Math.random(num_$)*10 + "<br>");

document.write("Round off value: " +Math.round(num_$) + "<br>");
document.write("Floor value: " + Math.floor(num_$) + "<br>");
document.write("Ceil value: " + Math.ceil(num_$) + "<br>")

//Q.2
var number = parseFloat(prompt("Enter negative floating point number"));

var num3 = Math.random(number)*100
document.write("Number: " + num3.toFixed(3)+ "<br>");

var num4 = Math.round(number)
document.write("Round off value: " + num4 + "<br>") 

var num5 = Math.floor(number)
document.write("Floor value: " + num5 + "<br>")

var num6 = Math.ceil(number)
document.write("Ceil value: " + num6)

//Q.3
var num$ = parseFloat(prompt("Enter your minus value before(-)"))

var value = Math.round( num$)
document.write("The absolute value of " + value + " is " + value);

//Q.4
var num7 = Math.random()*9
var num07 = num7.toFixed(0)

document.write("random dice value: "+num07);

//Q.5
var number = Math.random()*9;
var num = number.toFixed(0)
if(num === "2"){
    console.log("2 " + "Heads");
}else if(num === "1"){
    console.log("1 " + "Tail");
}else{
    alert("Please try again")
}

//Q.6 
var number = Math.random()*100
var num0$ = number.toFixed(0)
document.write("random number between 1 and 100: " + num0$)

//Q.7
var user = +prompt("Enter your weight")

document.write(`The weight of user is ${user} kilograms`)

//Q.8
var user1 = parseFloat(prompt("Enter your number 1 to 10"))

var random = Math.ceil(Math.random()*10)

if(random === user1){
    alert("Congratulate")
}else{
    alert("Try again!")
}