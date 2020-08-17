const fs = require("fs");
//PART ONE

// fs.readFile("./moves.txt", (err, data) => {
//   console.time("test");
//   if (err) {
//     console.log(err);
//   }
//   let floor = 0;
//   let moves = data.toString();
//   for (let i = 0; i < moves.length; i++) {
//     if (moves[i] === "(") {
//       floor++;
//     } else {
//       floor--;
//     }
//   }
//   console.log(floor);
//   console.timeEnd("test");
// });

fs.readFile("./moves.txt", (err, data) => {
  console.time("test");
  if (err) {
    console.log(err);
  }
  let floor = 0;
  let moves = data.toString();
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "(") {
      floor++;
    } else {
      floor--;
      if (floor < 0) {
        console.log(i + 1);
        console.timeEnd("test");
        return;
      }
    }
  }
});
