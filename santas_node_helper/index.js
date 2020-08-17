const fs = require("fs");
//PART ONE

function partOne() {
  fs.readFile("./moves.txt", (err, data) => {
    console.time("test");
    let floor = 0;
    let moves = data.toString();
    for (let i = 0; i < moves.length; i++) {
      if (moves[i] === "(") {
        floor++;
      } else {
        floor--;
      }
    }
    console.log(floor);
    console.timeEnd("test");
  });
}

function partTwo() {
  fs.readFile("./moves.txt", (err, data) => {
    console.time("test2");
    let floor = 0;
    let moves = data.toString();
    for (let i = 0; i < moves.length; i++) {
      if (moves[i] === "(") {
        floor++;
      } else {
        floor--;
        if (floor < 0) {
          console.log(i + 1);
          console.timeEnd("test2");
          return;
        }
      }
    }
  });
}

function partThree() {
  fs.readFile("./moves.txt", (err, data) => {
    console.time("test3");
    let moves = data.toString();
    let movesArray = moves.split("");
    const answer = movesArray.reduce((acc, curVal) => {
      if (curVal === "(") {
        return (acc += 1);
      } else {
        return (acc -= 1);
      }
    }, 0);
    console.log(answer);
    console.timeEnd("test3");
  });
}
partThree();
