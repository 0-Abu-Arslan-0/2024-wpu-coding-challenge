// WPU Coding Challenge 2024
// 11/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
  const sum = arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);
  return sum;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
