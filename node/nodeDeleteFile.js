const fs = require('fs');

fs.unlink('myNewFile2.txt', function(err) {
  if (err) throw err;
  console.log('File Deleted');
});
//this will totally delete the targeted file