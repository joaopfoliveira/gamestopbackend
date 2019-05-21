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

app.listen(3000);
