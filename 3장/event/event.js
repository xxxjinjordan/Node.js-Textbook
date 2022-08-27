const EventEmitter = require("events");

const myEvent = new EventEmitter();
myEvent.addListener("event1", () => {
  console.log("event 1");
});
myEvent.on("event2", () => {
  console.log("event 2");
});
myEvent.on("event2", () => {
  console.log("event 2 추가");
});
// 한번만 실행
myEvent.once("event3", () => {
  console.log("event 3");
});

myEvent.emit("event 1"); // 이벤트 호출
myEvent.emit("event 2"); // 이벤트 호출

myEvent.emit("event 3"); // 이벤트 호출
myEvent.emit("event 3"); // 실행 안됨

myEvent.on("event4", () => {
  console.log("event 4");
});
myEvent.removeAllListeners("event4");
myEvent.emit("event4"); // 실행 안됨

const listener = () => {
  console.log("event 5");
};
myEvent.on("event5", listener);
myEvent.removeListener("event5", listener);
myEvent.emit("event5"); // 실행 안됨

console.log(myEvent.listenerCount("event2"));
