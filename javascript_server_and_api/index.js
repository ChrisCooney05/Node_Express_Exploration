const express = require("express");
const app = express();

app.set("view engine", "ejs");

function handleRootRequest(req, res) {
  const name = req.query.name || "Stranger"; // if no name is given we pass out stranger instead
  res.render("home", { name: name });
} // function should be named to make it easier to track what our roots are doing
//this should really be in another file

app.get("/", handleRootRequest);

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
