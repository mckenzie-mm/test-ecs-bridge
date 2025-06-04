const express = require('express');
var http = require('http');

const app = express()
const port = 5000;




app.get('/data', (req, res) => {

    const options = {
        hostname: 'localhost',
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
    });

    request.end();
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



