let a = prompt("Enter your First Number");
let b = prompt("Choose Operator + , - , * , / ");
let c = prompt("Enter your Second Number");
let random = Math.random();
let obj = {
  "+": "-",
  "-": "*",
  "*": "+",
  "/": "%",
};
if (random > 0.1) {
  alert(`The Result is ${eval(`${a} ${b} ${c}`)}`);
} else {
  b = obj[b];
  alert(`The Result is ${eval(`${a} ${b} ${c}`)}`);
}
