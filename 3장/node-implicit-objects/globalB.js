const A = require("./globalA");

// globalB.js에서 global 객체에 속성명이 message인 값을 대입합니다.
global.message = "안녕";
// globalA.js 모듈의 함수를 호출합니다.
console.log(A());
// 콘솔 결과는 globalB에서 넣은 global.message 값을 globalA에서도 접근할 수 있음을 시사합니다.

/* 
    global 객체의 남용
    - global 객체의 속성에 값을 대입하여 파일 간 데이터를 공유할 수 있지만
      프로그램 규모가 커질수록 어떤 파일에서 global 객체에 접근 했는지 찾기 힘들어집니다.
      따라서 유지 보수에 어려움을 겪게 되므로 남용하지 않도록 합니다.
    - 다른 파일의 값을 사용하고 싶다면 모듈 형식으로 만들어서 명시적으로 값을 불러와 사용합니다.
*/
