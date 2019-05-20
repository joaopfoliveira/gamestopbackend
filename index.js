const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Conecta no MongoDB
mongoose.connect(
  "mongodb+srv://nodetutorial:nodetutorial@cluster0-cp4go.mongodb.net/test?"
);

// Carrega o model de Usuário
require("./models/user");

app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));

app.listen(3000);
