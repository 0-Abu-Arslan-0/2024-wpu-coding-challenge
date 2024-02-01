// WPU Coding Challenge 2024
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049

// function countBy(x, n) {
//   let z = [];
//   let i = x;

//   while (i <= x * n) {
//     z.push(i);
//     i += x;
//   }

//   return z;
// }

const countBy = (x, n) => {
  return Array.from({ length: n }, (_, i) => x * (i + 1));
};

console.log(countBy(1, 10));
console.log(countBy(2, 5));
