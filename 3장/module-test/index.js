const { odd, even } = require("./var");
// 사용할 변수와 불러올 모듈의 이름이 달라도 상관 없습니다.
const checkNumber = require("./func");
// require, module.exports는 CommonJS 모듈 방식입니다.
// import, export 등은 ES 모듈 방식입니다.

function checkStringOddorEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkNumber(0));
console.log(checkStringOddorEven("hello"));
