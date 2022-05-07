let x = prompt("Enter First Number");
let y = prompt("Enter Seciond Number");
let num1 = parseInt(x);
let num2 = parseInt(y);
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  addResult = num1 + num2;
  document.getElementById("sum-el").textContent = "Sum:" + addResult;
}
function subtract() {
  subResult = num1 - num2;
  document.getElementById("sum-el").textContent = "Sum: " + subResult;
}
function divide() {
  divideResult = num1 / num2;
  document.getElementById("sum-el").textContent = "Sum: " + divideResult;
}
function multiply() {
  mulResult = num1 * num2;
  document.getElementById("sum-el").textContent = "Sum: " + mulResult;
}
