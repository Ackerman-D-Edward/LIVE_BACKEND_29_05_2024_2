const express = require('express');
const app = express();

const port = 3000;

app.post('/hello', (req, res) => {
    res.send('Olá Mundo');
});

/*
Listas de Endpoints da aplicação CRUD de mensagens
CRUD: Create, Read (Single & All), Update and Delete
CRUD: Criar, Ler (Individual & Tudo), Atualizar e Remover
- [GET] /mensagens - Retorna a lista de mensagens
- [GET] /mensagens/{iD} - Retorna UMA ÚNICA MENSAGEM pelo ID
- [POST] /mensagens - Cria uma nova mensagem
- [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
- [DELETE] /mensagens/{id} - Remover uma mensagem pelo ID
*/

const mensagens = [
    "Essa é a primeira mensagem",
    "Essa é a segunda mensagem"
];

// - [GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
    res.send(mensagens);
});

// - [GET] /mensagens/{iD} - Retorna UMA ÚNICA MENSAGEM pelo ID
app.get('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1;
    const mensagem = mensagens[id];

    res.send(mensagem);
});

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});