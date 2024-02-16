// WPU Coding Challenge 2024
// 14/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  switch (true) {
    case avg >= 90:
      return "A";
    case avg >= 80:
      return "B";
    case avg >= 70:
      return "C";
    case avg >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log(getGrade(95, 90, 93));
