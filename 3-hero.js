// WPU Coding Challenge 2024
// 3/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// function hero(bullets, dragons) {
//   if (bullets >= dragons * 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

function hero(bullets, dragons) {
  return bullets / 2 >= dragons;
}

console.log(hero(10, 5));
