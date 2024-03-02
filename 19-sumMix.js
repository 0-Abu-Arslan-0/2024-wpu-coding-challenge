// WPU Coding Challenge 2024
// 19/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x) {
  return x.reduce((a, b) => a + +b, 0);
}

console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
console.log(sumMix(["1", "5", "8", 8, 9, 9, 2, "3"]));
