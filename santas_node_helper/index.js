const fs = require("fs");

fs.readFile("./moves.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
