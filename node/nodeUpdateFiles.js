const fs = require('fs');

fs.writeFile('myNewFile3.txt', 'I have changed the text', function(err) {
  if (err) throw err;
  console.log('Replaced!');
});

//Targets the file you have passed in and replaces the text