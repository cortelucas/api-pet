module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('Você esta na rota atendimentos. Está realizando um GET');
    });

    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        res.send(`Você esta na rota de atendimentos, realizando POST.`)
    })
}