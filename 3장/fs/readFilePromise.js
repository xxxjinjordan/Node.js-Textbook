const fs = require("fs").promises;

fs.readFile("./readme.txt")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
    console.log(data.toJSON());
  })
  .catch((err) => {
    console.error(err);
  });
