const fs = require("fs");

fs.readFile("./moves.txt", (err, data) => {
  console.time("test");
  if (err) {
    console.log(err);
  }
  let up = 0;
  let down = 0;
  let moves = data.toString();
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "(") {
      up++;
    } else {
      down++;
    }
  }
  let result = up - down;
  console.log(result);
  console.timeEnd("test");
});
