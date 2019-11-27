const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.get('/api', function (req, res) {
    res.send(['Bonjour', 'voici', 'un', 'tableau', 'de', 'string'])
});

app.use(express.static(__dirname + '/src'));

app.listen(process.env.PORT, function () {
    console.log('Example app listening!')
});
