const fs = require("fs");

setInterval(() => {
  // 존재하지 않는 파일을 삭제 시도
  fs.unlink("./abcdefg.js", (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);
