const fs = require("fs");

// 파일 경로는 node 명령어를 실행하는 콘솔 기준.
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
