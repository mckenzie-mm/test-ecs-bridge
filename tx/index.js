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

    const request = http.request(options, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            console.log('Response:', data);
            res.send(data);
        });
    });

    request.on('error', (error) => {
        console.error('Error:', error);
        res.status(500).send(error);
    });

    request.end();
});

app.get('/', (req, res) => {
  res.send(`Example app listening on port ${port}`);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



