const fs = require('fs');

fs.writeFile('myNewFile3.txt', 'Hello Content!', function(err) {
  if (err) throw err;
  console.log('Saved!');
});

/*
this method replaces a specified file and content
if it exists. if not, a new file is made with the 
specified content
*/