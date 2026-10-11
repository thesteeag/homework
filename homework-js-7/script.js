function DNAtoRNA(dna) {
  let result = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == "T") {
      result += "U";
    } else {
      result += dna[i];
    }
  }

  return result;
}

function betterThanAverage(classPoints, yourPoints) {
  let avgPts = 0;
  for (let i = 0; i < classPoints.length; i++) {
    avgPts += classPoints[i];
  }

  avgPts /= classPoints.length;

  return yourPoints > avgPts;
}

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

function boolToWord(bool) {
  return bool == true ? "Yes" : "No";
}

function digitize(n) {
  return n >= 0 ? n.toString().split("").map(Number).reverse() : "Error";
}

function getGrade(s1, s2, s3) {
  let avgScore = (s1 + s2 + s3) / 3;

  switch (true) {
    case avgScore <= 100 && avgScore >= 90:
      return "A";
    case avgScore < 90 && avgScore >= 80:
      return "B";
    case avgScore < 80 && avgScore >= 70:
      return "C";
    case avgScore < 70 && avgScore >= 60:
      return "D";
    case avgScore < 60 && avgScore >= 0:
      return "F";
  }
}

var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

function findAverage(array) {
  let sum = 0;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  } else {
    return 0;
  }
}

function greet() {
  return "hello world!";
}
