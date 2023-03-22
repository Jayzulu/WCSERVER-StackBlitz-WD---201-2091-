const express = require('express');
const app = express();

const dishes = [
  {
    type: 'Sisig',
    title: 'Superman',
  },
  {
    type: 'Salpicao',
    title: 'Thor',
  },
  {
    type: 'Bagnet',
    title: 'Iron Man',
  },
];

app.get('/api/dishes', (req, res) => {
  res.send(dishes);
});

app.get('/api/dishes/:id', (req, res) => {
  const dish = dishes.find((h) => h.id === parseInt(req.params.id));
  if (!dish) return res.status(404).send('Record not found.');
  res.send(dish);
});

app.listen(3000, () => console.log('listening on port 3000'));
