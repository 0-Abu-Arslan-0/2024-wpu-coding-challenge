// WPU Coding Challenge 2024
// 16/366
// codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return Math.floor(sum / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 5, 87, 45, 8, 8]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
