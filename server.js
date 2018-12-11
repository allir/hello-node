'use strict';

const os = require('os');
const express = require('express');

// Constants
const HOST = '0.0.0.0';
const PORT = 8080;

// App
var hello = process.env.HELLO_VAR || 'allir';
var hostname = os.hostname();
const app = express();
app.get('/', (req, res) => {
	res.send(`Hello from ${hello}\n\n\nServing from ${hostname}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

