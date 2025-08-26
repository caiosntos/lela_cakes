const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname)));
app.get("/api/hello", (req, res) => {
});

app.listen(5000, () => {
  console.log(`Servidor rodando em http://localhost:${5000}`);
});
