const express = require('express');
const app = express();

const dishes = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: 220
  },
  {
    type: 'Salpicao',
    province: 'Quezon',
    price: 180
  },
  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: 370
  },
];

app.get('/api/dishes', (req, res) => {
  res.send(dishes);
});

app.get('/api/dishes/:search', (req, res) => {
  const search = req.params.search;
  const dish = dishes.find(
    (h) =>
    h.type.toLowerCase().includes(search.toLowerCase()) || 
    h.province.toLowerCase().includes(search.toLowerCase()) ||
    h.price === parseInt(search));
  if (!dish) return res.status(404).send('Record not found.');
  res.send(dish);
});

app.listen(3000, () => console.log('listening on port 3000'));
