const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Puerto diferente al de Next.js

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.send('Servidor funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
