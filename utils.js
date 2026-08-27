function saudacao(nome) {
 return `Olá, ${nome}! Bem-vindo ao sistema da biblioteca.`;
}
function formatarData(data = new Date()) {
 return data.toLocaleDateString('pt-BR');
}
// Exportando as funções para que outros arquivos possam usá-las
module.exports = { saudacao, formatarData };