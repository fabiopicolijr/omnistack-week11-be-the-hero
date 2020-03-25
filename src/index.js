const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors()); // em dev
//app.use(cors({origin: 'http://minhaaplicacao.com.br'})); em producao
app.use(express.json());
app.use(routes);

app.listen(3333);