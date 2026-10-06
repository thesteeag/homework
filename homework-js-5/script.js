const person = {
  firstName: "Василий",
  lastName: "Титов",
  isStudy: true,
  birthDay: "29.03.89",
};

for (let key in person) {
  console.log(person[key]);
}

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(person));

const task = {
  title: "Домашнее задание выполняется",
  description: "Работа с объектами делается",
  isCompleted: false,
};

const mod = {
  title: "Домашнее задание выполнено",
  description: "Работа с объектами закончена",
  isCompleted: true,
};

function cloneAndModify(source, update) {
  return { ...source, ...update };
}

const updatedObj = cloneAndModify(task, mod);

for (let key in updatedObj) {
  console.log(updatedObj[key]);
}

const myObj = {
  method1() {
    return "Первый метод";
  },
  method2() {
    return "Второй метод";
  },
  test: "Это тест",
};

function callAllMethods(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      console.log(obj[key]());
    } else {
      return `${key} не метод`;
    }
  }
}

console.log(callAllMethods(myObj));
