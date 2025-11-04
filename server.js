const express = require("express");
const router = require("./src/routes/user");
const database = require("./src/database");
const app = express();
const port = 3050;

app.use(express.json());

// Usa o router com as rotas das operações
app.use("/api/v1/user", router);

database.db
  .sync({ force: false })
  .then((_) => {
    app.listen(port, () => {
      console.log(`API rodando na porta: ${port}`);
    });
  })
  .catch((e) => {
    console.error("Não foi possível conectar com o banco de dados: " + e);
  });
