const connection = require('../database/connection');

//rota de login: verifica se a ONG realmente existe
module.exports = {
    async create(request, response) {
        const { id } = request.body; //busca o id através do corpo da requisição

        //buscar uma ong do banco de dados
        const ong = await connection('ongs') 
        .where('id', id)
        .select('name')
        .first(); //para trazer apenas o id
        //se a ong não existir:
        if (!ong) {
            return response.status(400).json ({ error: 'No ONG found whith this id' });

        }

        return response.json(ong);

    }
}