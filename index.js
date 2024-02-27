const express = require('express');
const app = express();

const estacao = require('./estacao');

app.get('/', (req, res) => {
    let mes = req.query.mes;
    let estacaoAno = estacao.retornaEstacao(mes);

    res.json({estacao : estacaoAno});
});

app.listen(8081, () => {
    let data = new Date();
    console.log('Servidor iniciado em: ' + data);
});
