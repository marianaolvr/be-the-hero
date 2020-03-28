const connection = require('../database/connection');

//método para retornar os incidentes especídicos de uma única ong
module.exports = {
    async index(request, response){
       const ong_id = request.headers.authorization; //acessa os dados da ong que está logada
       const incidents = await connection('incidents') //busca todos campos de todos os incidentes desta ong
       .where('ong_id', ong_id)
       .select('*');
       return response.json(incidents);
    }
}