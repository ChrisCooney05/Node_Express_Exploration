const fs = require('fs');

fs.rename('myNewFile1.txt', 'renameFile.txt', function(err) {
  if (err) throw err;
  console.log('File renamed!');
});

//renames the first argument with the second argument