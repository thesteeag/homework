const firstName = "Иван";
const lastName = "Иванов";
const isStudent = true;
const age = 30;
const currentYear = 2026;
const birthDate = currentYear - age;

console.log(
  `Меня зовут ${firstName}  ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent}`,
);

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");

let result = a + b + c + d + e;

// result = "12345678901"

console.log(a + b + c + d + e);
