
const express = require('express');
const {exec} = require('child_process');
const app = express();

app.all('/', function(request, response) {
  exec('sh glitch-daily-commit.sh', (error, stdout, stderr) => {
    if (error) {
      return response.status(500).send(error.message)
    }
  
    if (stderr) {
      return response.status(200).send(stderr)
    }
  
    response.sendFile('./daily-change.txt');
  })
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
