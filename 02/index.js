// console.log("zdravo svettttttttttttttttt4e");
// console.log(5 != 5);
// console.log(typeof 25);

// const person = {
//   name: "John",
//   surname: "Doe",
// };

// console.log(person);
// a = 10;
// console.log(a);
a = 12;
// console.log(a);
const b = 15;
// console.log(b);
// // b = 30;
// // console.log(b);

// let niza = [1, true, 2.5, "zdravo"];
// console.log(niza);

const student = {
  ime: "pero",
  prezime: "nakov",
  age: 25,
};

console.log(student);

student.prezime = "perovski";
console.log(student);

function testFn(a, b) {
  console.log("b: ", a);
  console.log("b: ", b);
  return "test fn initiated";
}

console.log(testFn(a, b));
let test_fn = testFn(a, b);
console.log(test_fn);

// testFn();

const testFn1 = () => {
  console.log("test fn1 initiated. this is an arrow function.");
};

testFn1();
