const express = require('express');
var http = require('http');

const app = express();
const port = 5000;

app.get('/data', (req, res) => {

    const options = {
        hostname: 'webapi',
        port: 3000,
        path: '/',
        method: 'GET'
    };

    const client = http.request(options, (message) => {
        let data = '';

        message.on('data', (chunk) => {
            data += chunk;
        });

        message.on('end', () => {
            console.log('Message:', data);
            res.send(data);
        });
    });

    client.on('error', (error) => {
        console.error('Error:', error);
        res.status(500).send(error);
    });

    client.end();
});

app.get('/', (req, res) => {
  res.send(`Example app listening on port ${port}`);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



