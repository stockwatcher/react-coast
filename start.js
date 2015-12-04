
var express = require('express');
var app = express();

app.use('/react-coast/js', express.static(__dirname + '/js', {
  index: false
}));
app.use('/react-coast/css', express.static(__dirname + '/rc-gen/css', {
  index: false
}));
app.use('/palette', express.static(__dirname + '/node_modules/palette-css/pl-gen/css', {
  index: false
}));
app.use(express.static(__dirname));

app.listen('1234');

