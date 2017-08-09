var express = require('express');
var morgan = require('morgan');
var app = express();
var path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(morgan('[:method]\t:status\t:url\t:response-time ms - :res[content-length]'))

app.use(express.static('public'));

app.listen(2525,()=>{
  console.log("listen: http://localhost:2525");
});