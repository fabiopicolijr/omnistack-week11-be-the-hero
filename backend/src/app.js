const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors()); // em dev
//app.use(cors({origin: 'http://minhaaplicacao.com.br'})); em producao
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;