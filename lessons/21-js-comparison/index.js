alert("Enter two numbers to see if the first is greater than the second");
let num1=prompt("What is the first number?");
let num2=prompt("What is the second number?");

let accurate=confirm(num1>num2);

console.log("Were we accurate",accurate);