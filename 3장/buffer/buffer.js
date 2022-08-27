// from(문자열) 문자열을 버퍼로 바꿀 수 있습니다. length 속성은 버퍼의 크기를 알립니다.
const buffer = Buffer.from("저를 버퍼로 바꿔보세요.");

console.log("from():", buffer);
console.log("length:", buffer.length);
// toString(버퍼): 버퍼를 다시 문자열로 바꿉니다.
console.log("toString():", buffer.toString());

const array = [
  Buffer.from("띄엄"),
  Buffer.from("띄엄"),
  Buffer.from("띄어쓰기"),
];
const buffer2 = Buffer.concat(array);
// concat(배열): 배열 안에 든 버퍼들을 하나로 합칩니다.
console.log("concat():", buffer2.toString());

// alloc(바이트): 빈 버퍼를 생성합니다. 바이트를 인수로 넣으면 해당 크기의 버퍼가 생성됩니다.
const buffer3 = Buffer.alloc(5);
console.log("alloc():", buffer3);
