import { json } from 'body-parser';
import { connect } from 'mongoose';

// Carrega o model de Usuário
import './models/user';
const app = require('express')();

// Conecta no MongoDB
connect(
  'mongodb+srv://nodetutorial:nodetutorial@cluster0-cp4go.mongodb.net/test?'
);

app.use(json());

// Inicia as rotas da API
app.use('/api', require('./controllers/userController'));

app.listen(3000);
