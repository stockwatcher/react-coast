
React COAST - React COmponents And Sensible Templates

User Installation Instructions:

```
app.use('/react-coast/js', express.static(__dirname + '/node_modules/react-coast/js', {
  index: false
}));
app.use('/react-coast/css', express.static(__dirname + '/node_modules/react-coast/rc-gen/css', {
  index: false
}));
app.use('/palette', express.static(__dirname + '/node_modules/react-coast/node_modules/palette-css/pl-gen/css', {
  index: false
}));
```

Dev Installation Instructions:

npm install

sudo gem install listen
sudo gem install sass

sass --watch sass:rc-gen/css

