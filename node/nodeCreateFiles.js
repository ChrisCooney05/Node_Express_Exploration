const fs = require('fs');

fs.appendFile('myNewFile1.txt', 'Hello Content!', function (err) {
  if (err) throw err;
  console.log('Saved!')
});
// appendFile appends content to a file, if it does not exist it makes a new file.
// file name myNewFile1 content is Hello Content!
// this ran with node makes the file/appends then logs that everything is saved.