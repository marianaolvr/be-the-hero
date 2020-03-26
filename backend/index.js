const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.send('Hello World');
});


app.get('/json', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Mariana Oliveira Alves'
    })
});
app.listen(3333);