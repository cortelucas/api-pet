const customExpress = require('./config/customExpress');
const app = customExpress();

app.listen(3000, () => {
    console.log(`Servidor rodando em 'http://localhost:3000'`);
});