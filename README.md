Setting up a server in Node Js

1. ```node -v```

2. ```brew install node```

3. create node.js file for server ('server.js')

4. ```npm init```

5. create git ignore file for node_modules

6. ```npm install --save express```

7. ```npm install --save ejs```

8. In server.js file write the following:

```JavaScript

var server = require('express')();
var http = require('http').createServer(server);

server.get('/', function(request, response){
  response.send('<h1>Hello World</h1>')
  console.log('hey');
});

http.listen(3000, function(){
  console.log('listening on port 3000')
});

```
9. Now you can run the server with either
```
node server
node server.js
npm start server.js
```
10. If you create a views folder you have to explicitly say where to find the files. For this I am using ejs files.


11. You will need to add the bellow to the file. This specfys where the file is kept and then specifys what type of file it is.

```JavaScript
server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');//different rendering page tools jade, ejs
```
12. Now create a get. If you look closely. I am now using .render instead of .send(filename).
```JavaScript
server.get('/page2', function(request, response){
  response.render('index')
});
```
Notice how similar this is to ruby and erb....
```ruby
get 'index' do
  erb :index
end
```
Here is the full server so far...

```JavaScript
var server = require('express')();
var http = require('http').createServer(server);

server.set('views', __dirname + '/views');
server.set('views engine', 'ejs');//different rendering page tools jade, ejs

server.get('/', function(request, response){
  response.send('<h1>Hello World</h1>')
  console.log('hey');
});


server.get('/page2', function(request, response){
  response.render('index')
});


http.listen(3000, function(){
  console.log('listening on port 3000')
});
```
PLEASE SEE these video's for more details -

- https://vimeo.com/110240527  

- https://youtu.be/E3tTzx0Qoj0
