"use strict";

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

function getUserAverageAge(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].age;
  }

  const averageAge = sum / arr.length;

  return averageAge;
}

function getAllAdmins(arr) {
  let userAdmins = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isAdmin === true) {
      userAdmins.push(arr[i]);
    }
  }

  return userAdmins;
}

function first(arr, n = 1) {
  let newArr = [];

  if (n > arr.length) {
    console.error(`${n} не можеть быть больше длинны массива: ${arr.length}`);
    return;
  }

  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(getUserAverageAge(users));
console.log(getAllAdmins(users));
console.log(first(users, 8));
