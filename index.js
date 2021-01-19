const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`Servidor rodando em 'http://localhost:${port}'`);
});

app.get('/atendimentos', (req, res) => {
    res.send('Você esta na rota atendimentos. Está realizando um GET');
});