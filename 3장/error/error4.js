process.on("uncaughtException", (err) => {
  console.error("예기치 못한 에러", err);
});

setInterval(() => {
  throw new Error("서버를 고장냅니다");
}, 1000);

setTimeout(() => {
  console.log("실행되그든요");
}, 2000);
