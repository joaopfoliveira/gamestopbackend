import { json } from 'body-parser';
import { connect } from 'mongoose';
import { config } from './utils/config';

// Carrega o model de Usuário
import './models/user';
const app = require('express')();

// Conecta no MongoDB
connect(config.mongoURI);

app.use(json());

// Inicia as rotas da API
app.use('/api', require('./controllers/userController'));
const PORT = process.env.PORT || config.port;
app.listen(PORT || config.port,() => console.log(`Example app listening on port ${PORT}!`));
