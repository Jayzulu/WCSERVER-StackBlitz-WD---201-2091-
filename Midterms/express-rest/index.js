const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('My New App!');
});

app.get('/api/heroes', (req, res) => {
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
});

app.get('/api/heroes/:id', (req, res) => {
    res.send(req.params.id);
});


app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});


app.listen(3000, () => console.log('listening on port 3000'));
