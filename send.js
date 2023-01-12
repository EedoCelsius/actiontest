const https = require('http');

const options = {
  hostname: 'untitled-uam1txsq3634.runkit.sh',
  path: '/',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
