// WPU Coding Challenge 2024
// 11/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!";
//   } else if ((p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors")) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };

const rps = (p1, p2) => {
  const rule = {
    scissors: "paper",
    paper: "rock",
    rock: "scissors",
  };

  if (rule[p1] === p2) {
    return "Player 1 won!";
  } else {
    if (rule[p2] === p1) {
      return "Player 2 won!";
    } else {
      return "Draw!";
    }
  }
};

console.log(rps("scissors", "paper"));
console.log(rps("scissors", "rock"));
console.log(rps("paper", "paper"));
