let a = prompt("enter your first number");
let b = prompt("enter your second number");
let c = prompt("enter your third number");
if (a > b) {
  if (a > c) {
    console.log("A is a greater number");
  } else console.log("c is the greater number");
} else {
  if (b > c) {
    console.log("B is the greater number");
  } else console.log("C is the greater number");
}
console.log();
