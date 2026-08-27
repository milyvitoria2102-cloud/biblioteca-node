const { saudacao, formatarData } = require('./utils');
const config = require('./config');
console.log(saudacao('Professor'));
console.log(`Data de hoje: ${formatarData()}`);
console.log(`Rodando o projeto: ${config.nomeProjeto}`);
console.log(`Porta configurada: ${config.porta}`);


const express = require('express');
const app = express();
const PORTA = 3000;
app.listen(PORTA, () => {
console.log(`Servidor rodando em http://localhost:${PORTA}`);
});


const express = require('express');
const app = express();
const PORTA = 3000;
app.get('/', (req, res) => {
res.send('Bem-vindo ao Sistema de Gerenciamento de Biblioteca!');
});
app.get('/sobre', (req, res) => {
res.send('Este é um projeto acadêmico para gerenciar livros, usuários e empréstimos.');
});
app.get('/contato', (req, res) => {
res.send('Fale com a biblioteca pelo e-mail: contato@biblioteca.com');
});
app.listen(PORTA, () => {
console.log(`Servidor rodando em http://localhost:${PORTA}`);
});