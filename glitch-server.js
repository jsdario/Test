const http = require('http');
const {exec} = require('child_process');

http.createServer(function(request, response) {
  var host = request.headers['host'];
  console.log(`port: ${process.env.PORT}, host: ${host}`);
  
  request.addListener('end', function() {
    exec('sh daily-commit.sh ')
    response.statusCode=200;
    response.statusMessage='Committed';
    response.end();
  });
}).listen(process.env.PORT);
