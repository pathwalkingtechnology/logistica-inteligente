const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const pedidos = [];

app.post('/pedidos', (req, res) => {
  const pedido = req.body;
  pedidos.push(pedido);
  res.send(`Pedido registrado con éxito`);
});

app.get('/pedidos', (req, res) => {
  res.json(pedidos);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});
