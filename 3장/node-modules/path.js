const path = require("path");

const str = __filename;
console.log("let's see what str is!", str);
// 파일 경로의 구분자입니다.
console.log("path.sep:", path.sep);
// 환경변수의 구분자입니다.
console.log("path.delimeter:", path.delimiter);
console.log("-----------------------------");
// 파일이 위치한 폴더 경로
console.log("path.dirname():", path.dirname(str));
// 파일의 확장자
console.log("path.extname():", path.extname(str));
// 파일의 이름(확장자 포함)을 표시.
console.log("path.basename():", path.basename(str));
// 파일의 이름만 표시하고 싶다면 두번째 인수로 파일의 확장자를 넣습니다.
console.log("path.basename - extname:", path.basename(str, path.extname(str)));
console.log("-----------------------------");
// 파일 경로를 root, dir, base, ext, name으로 분류합니다.
console.log("path.parse():", path.parse(str));
// path.parse()한 객체를 파일 경로로 합칩니다.
console.log(
  "path.format():",
  path.format({
    dir: "C:\\Users\\Admin\\Desktop\\Develop\\Node.js 교과서\\3장\\node-modules",
    name: "path",
    ext: "js",
  })
);
// '\'나 '/'를 혼용했을 때 정상적인 경로로 반환해줍니다.
console.log("path.normalize():", path.normalize("C//Users\\\\Admin"));
console.log("-----------------------------");
// 파일의 경로가 절대경로인지 상대경로인지 true or false로 알립니다.
console.log("path.isAbsolute(C:\\):", path.isAbsolute("C:\\"));
console.log("path.isAbsolute(./home):", path.isAbsolute("./home"));
console.log("-----------------------------");
// path.relative(기준경로, 절대경로) 경로를 두개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알립니다.
console.log(
  "path.relative():",
  path.relative(
    "C:\\Users\\Admin\\Desktop\\Develop\\Node.js 교과서\\3장\\node-modules\\path.js",
    "C:\\"
  )
);
// 여러 인수를 넣으면 하나의 경로로 합칩니다. 상대경로인 ..과 .도 알아서 처리합니다.
console.log(
  "path.join():",
  path.join(__dirname, "..", "..", "/Users", ".", "/node-modules")
);
console.log(
  "path.resolve():",
  path.resolve(__dirname, "..", "Users", ".", "/node-modules")
);
