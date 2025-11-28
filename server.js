const express = require("express");
const userRouter = require("./src/routes/user");
const personRouter = require("./src/routes/person");
const database = require("./src/database");

const app = express();
const port = 3070;

app.use(express.json());

// Usa o router com as rotas das operações
app.use("/api/v1/user", userRouter);
app.use("/api/v1/person", personRouter);

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
