const express = require('express');
const app = express();

const port = 3000;

app.post('/hello', (req, res) => {
    res.send('Olá Mundo');
});

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});