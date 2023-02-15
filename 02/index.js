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

// const testFn2 = (b, a = 25) => {
//    return a+b;
// }

// console.log(testFn2(50, 20));

const testFn3 = (o = {}) => {
  o.ime = "toce";
  console.log(o);
};

const s = { ime: "zlate", prezime: "zlatev" };

testFn3(s);
// console.log(o);
console.log(s);

let uchenik = { ime: "marko", ocena: 4 };
let uchenik2 = uchenik;

console.log(uchenik);
uchenik.ime = "vlado";
console.log(uchenik);
console.log(uchenik2);

const convert = (type, value) => {
  switch (type) {
    case "c2f":
      return (value * 9) / 5 + 32;
    case "f2c":
      return value - (32 * 5) / 9;
    default:
      console.log("cannot convert. the conversion type does not exist.");
      return;
  }
};

let temp = 25;
console.log(convert("c2f", temp));
let res = convert("p2p", temp);
console.log(res);
// c2f vrednost * 9/5 + 32
// f2c vrednost -32 * 5/9

// definitirajte dva objeki na ucenici
// da imaat ime prezime i ocenka
// dokolku prviot uchenik ima pogolema ocenka od vtoriot
// pechatete "<ime na prv uchenik> <prezime na prv uchenik> e podobar od <ime na vtor uchenik> <prezime na vtor uchenik>"
// dokolku e obratno, ispechatete go obratnoto
// dokolku se isti, ispechatete "uchenik 1 ima isto znaenje kako i uchenik 2."

const vlade = {
  ime: "vlade",
  prezime: "trajkov",
  ocenka: 4,
};

const trajche = {
  ime: "trajche",
  prezime: "petkov",
  ocenka: 4,
};
console.log(trajche);
console.log(vlade);

if (vlade.ocenka > trajche.ocenka) {
  console.log(
    `${vlade.ime} ${vlade.prezime} e podobar uchenik od ${trajche.ime} ${trajche.prezime}`
  );
} else if (trajche.ocenka > vlade.ocenka) {
  console.log(
    `${trajche.ime} ${trajche.prezime} e podobar uchenik od ${vlade.ime} ${vlade.prezime}`
  );
} else if ((trajche.ocenka = vlade.ocenka)) {
  console.log(
    `uchenik 1 ${vlade.ime} ima isto znaenje kako i uchenik 2 ${trajche.ime}.`
  );
}

vlade.ocenka > trajche.ocenka ?
    console.log("asd") : vlade.ocenka < trajche.ocenka ?
        console.log("asd1") : console.log("asd2")