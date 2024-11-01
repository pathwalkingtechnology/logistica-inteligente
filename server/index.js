const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Logística Inteligente');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
