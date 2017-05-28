const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync(__dirname + '/private.key'),
  cert: fs.readFileSync(__dirname + '/certificate.pem')
};

const secureServer = https.createServer(options, app);
