const fs = require('fs');

fs.appendFile('myNewFile1.txt', ' Updated Text', function(err) {
  if (err) throw err;
  console.log('Updated!');
});

/* will find the specified file and will add the text
to the end of the file
*/