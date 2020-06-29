const express = require("express");
const app = express();

function handleRootRequest(req, res) {
  res.send("Hello World");
} // function should be named to make it easier to track what our roots are doing
//this should really be in another file

app.get("/", handleRootRequest);

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
