const express = require("express");
const app = express();
app.use(express.json());
app.get("/products", (req, res) => {
    res.json([
        { id: 1, name: "Produto Exemplo" },
        { id: 2, name: "Outro Produto" },
    ]);
});
// Nova funcionalidade
app.get("/categories", (req, res) => {
    res.json([
        { id: 1, name: "Eletrônicos" },
        { id: 2, name: "Livros" },
    ]);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 API Loja disponível em http://localhost:${PORT}/products`);
});