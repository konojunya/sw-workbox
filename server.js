var express = require('express');
var morgan = require('morgan');
var app = express();
var path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.use(morgan('[:method]\t:status\t:url\t:response-time ms - :res[content-length]'))

app.use(express.static(path.join(__dirname, './assets')));
app.use(`/public`, express.static(path.join(__dirname, './public')));

app.listen(2525,()=>{
  console.log("listen: http://localhost:2525");
});