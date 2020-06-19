const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
}).listen(8080);

/*last line can also be displayed as
app.listen(8080); instead of attached
*/