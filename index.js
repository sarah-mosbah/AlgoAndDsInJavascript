function foo(n) {
  if (n == 6) {
    let num = 2;
  }
  console.log(num); // num is 6 as it is declared in the global scope
}

var num = 6;
console.log(num);
foo(6);

function foo(n) {
  if (n == 6) {
    let num = 2;
  }
  console.log(num); // num is not defined as it is declared in the block scope
}

const num = 6;
console.log(num);
foo(6);

function foo(n) {
  if (n == 6) {
    var num = 2;
  }
  console.log(num); // num is 2 as it is declared in the function scope
}

const num = 6;
console.log(num);
foo(6);
