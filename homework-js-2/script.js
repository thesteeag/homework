// *** Задача 1 ***

const isEven = 14;

if (isEven % 2 == 0) {
  console.log("Четное число");
} else {
  console.log("Нечетное число");
}

// *** Задача 2 ***

const age = 67;

const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;

console.log(`Скидка ${discount}%`);

switch (true) {
  case age <= 18:
    console.log("Скидка 10%");
    break;
  case age >= 18 && age <= 65:
    console.log("Скидка 20%");
    break;
  case age >= 65:
    console.log("Скидка 30%");
}

// *** Задача 3 ***

// const userName = "admin";
// const userPassword = "1234";

// if (
//   prompt("Введите имя") === userName &&
//   prompt("Введите пароль") === userPassword
// ) {
//   alert("Доступ разрешён");
// } else {
//   alert("Доступ запрещён");
// }

// *** Задача 4 ***

const deliveryWeight = Number(prompt("Введите вес посылки (кг)"));

const deliveryType = prompt("Введите тип доставки");

if (deliveryWeight <= 0) {
  alert("Некорректный вес посылки");
}

if (
  deliveryType.toLocaleLowerCase() != "стандарт" &&
  deliveryType.toLocaleLowerCase() != "экспресс" &&
  deliveryType.toLocaleLowerCase() != "премиум"
) {
  alert("Неверный тип доставки");
}

// if (deliveryWeight <= 1) {
//   console.log("Стоимость 5р");
// } else if (deliveryWeight > 1 && deliveryWeight <= 5) {
//   console.log("Стоимость 10р");
// } else if (deliveryWeight > 5) {
//   console.log("Базовая стоимость 15р");
// }

const deliveryPrice = deliveryWeight <= 1 ? 5 : deliveryWeight <= 5 ? 10 : 15;

console.log(`Базовая стоимость: ${deliveryPrice}р`);

let deliveryPriceSum = "";

switch (deliveryType) {
  case "стандарт":
    deliveryPriceSum = deliveryWeight * 1;
    break;
  case "экспресс":
    deliveryPriceSum = deliveryWeight * 1.5;
    break;
  case "премиум":
    deliveryPriceSum = deliveryWeight * 2;
}

alert(`Итоговая стоимость: ${deliveryPriceSum}р`);
