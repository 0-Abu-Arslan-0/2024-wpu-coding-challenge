// WPU Coding Challenge 2024
// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
  if (array === null || array.length <= 2) return 0;
  const sort = array.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < sort.length - 1; i++) {
    result += sort[i];
  }
  return result;
}

console.log(sumArray(null));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
