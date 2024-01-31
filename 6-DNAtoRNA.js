// WPU Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GACCGCCGCC"));
