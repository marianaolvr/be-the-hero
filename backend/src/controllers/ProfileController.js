const connection = require('../database/connection');

//método para retornar os incidentes especídicos de uma única ong
module.exports = {
    async index(request, response){
        //acessa os dados da ong que está logada
       const ong_id = request.headers.authorization;
       //busca todos campos de todos os incidentes desta ong
       const incidents = await connection('incidents')
       .where('ong_id', ong_id)
       .select('*');

       return response.json(incidents);
    }
}