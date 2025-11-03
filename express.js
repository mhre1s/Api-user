const express = require("express");
const router = require("./src/routes/user");
const app = express();
const port = 3030;

app.use(express.json());

// Usa o router com as rotas das operações
app.use("/api/v1/user", router);

app.listen(port, () => {
  console.log(`API rodando na porta: ${port}`);
});
