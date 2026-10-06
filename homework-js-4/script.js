function calculateFinalPrice(price = 0, taxRate = 0, discount = 0) {
  const discountValue = (price * discount) / 100;
  const discountPrice = price - discountValue;
  const taxValue = discountPrice * taxRate;
  const finalPrice = discountPrice + taxValue;

  return finalPrice;
}

console.log(calculateFinalPrice(100, 0.2, 10));

function checkAccess(userName, userPassword) {
  if (userName === "admin" && userPassword === "123456") {
    return "Доступ разрешён";
  } else {
    return "Доступ запрещён";
  }
}

console.log(checkAccess("admin", "123456"));

function getTimeOfDay(time) {
  switch (true) {
    case time >= 0 && time <= 5:
      return "Ночь";
    case time > 5 && time <= 11:
      return "Утро";
    case time > 11 && time <= 17:
      return "День";
    case time > 17 && time <= 24:
      return "Ночь";
    default:
      return "Некорректное время";
  }
}

console.log(getTimeOfDay(23));

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Чётных чисел нет";
}

console.log(findFirstEven(2, 8));
