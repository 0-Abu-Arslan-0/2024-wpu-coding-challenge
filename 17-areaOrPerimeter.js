// WPU Coding Challenge 2024
// 17/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = function (l, w) {
    if (l === w) {
        return l * w
    } else {
        return 2 * (l + w)
    }
};

console.log(areaOrPerimeter(4, 4));
console.log(areaOrPerimeter(6, 10));
console.log(areaOrPerimeter(20, 30));