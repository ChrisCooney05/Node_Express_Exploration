const fs = require('fs');

fs.open('myNewFile2.txt', 'w', function(err) {
  if (err) throw err;
  console.log('Saved!');
})

/* makes a new file if a file does not exist 
the w flag specifies that the file be opened for writing
*/