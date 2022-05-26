const express = require('express');
const routes = require('./routes');
const handleError = require('./middlewares/handleError')
const db = require('./databases')
const app = express();

db.hasConection();

app.use(express.json());

app.use(routes);
app.use(handleError); 

const port = 3000

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));