for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    continue;
  }
  console.log(i);
}

const numberInput = Number(prompt("Введите число"));
let factorial = 1;

for (let i = 1; i <= numberInput; i++) {
  factorial *= i;
}

console.log(factorial);

let row = "";

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 !== 0) {
      row += "Ч ";
    } else {
      row += "Б ";
    }
  }
  row += "\n";
}

console.log(row);
