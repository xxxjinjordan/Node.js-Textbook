// require 함수는 Node.js에서 기본적으로 제공하는 내장 객체(함수)
const { odd, even } = require("./var");

function checkOddorEven(num) {
  if (num % 2) {
    return odd;
  } else {
    return even;
  }
}
// module.exports에는 객체만 대입해야 하는 것이 아니라 함수나 변수를 대입해도 됩니다.
module.exports = checkOddorEven;
