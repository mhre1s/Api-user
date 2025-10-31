const express = require("express");
const router = require("./routes/operacoes");
const app = express();
const port = 3030;

app.use(express.json());

// Usa o router com as rotas das operações
app.use(router);

app.listen(port, () => {
  console.log(`API rodando na porta: ${port}`);
});
