var server = require('express')();
var http = require('http').createServer(server);

server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');//different rendering page tools jade, ejs 

server.get('/', function(request, response){
  response.send('<h1>Hello World</h1>')
  console.log('hey');
});

server.get('/page2', function(request, response){
  response.send('This is page 2')
});

server.get('/page3', function(request, response){
  response.render('index')
});


http.listen(3000, function(){
  console.log('listening on port 3000')
});
