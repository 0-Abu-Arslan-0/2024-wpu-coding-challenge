// WPU Coding Challenge 2024
// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//   // TODO
//   let total = 0;
//   for (let i = 0; i < games.length; i++) {
//     let score = games[i].split(":");
//     if (parseInt(score[0]) > parseInt(score[1])) {
//       total += 3;
//     } else if (parseInt(score[0]) < parseInt(score[1])) {
//       total += 0;
//     } else {
//       total += 1;
//     }
//   }
//   return total;
// }

function points(games) {
  const result = games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);
  return result;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]));
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]));
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]));
