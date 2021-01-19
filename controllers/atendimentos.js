const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('Você esta na rota atendimentos. Está realizando um GET');
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento);
        res.send('Post atendimento');
    })
}