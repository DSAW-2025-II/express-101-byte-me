const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
const users = require('./data');

app.get('/', (req, res) => {
  res.send('ok');
});


app.get('/user-info', (req, res) => {
  res.json(users);
});

app.get('/user-info/:num', (req, res) => {
  const num = parseInt(req.params.num, 10);
  if (isNaN(num) || num < 1 || num > users.length) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(users[num - 1]);
});

app.listen(port, () => console.log(`Servidor activo en http://localhost:${port}`));
