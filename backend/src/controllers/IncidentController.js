const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query; //paginação da listagem

        const [count] = await connection('incidents') // contador: query que vai retornar a quantidade de casos
            .count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //relacionar dados de duas tabelas
            .limit(5) //limita para 5 o número de retornos de incidentes 
            .offset((page - 1) * 5) //pular 5 registros para cada hora
            .select
            ([ //campos que eu estou buscando no DB
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('X-Total-Incidents', count['count(*)']);

        return response.json(incidents);

    },

    async create(request, response) {
        const { title, description, value } = request.body;
        //cabeçalho da requisição, onde fica a autenticação
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params; //pega o id do incidente
        const ong_id = request.headers.authorization; //pega o id da ong que cadastrou o incidente

        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permited.' }); //não autorizado
        }
        //se deu tudo certo, se ele passou, deleto do banco
        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); //retornar uma resposta de sucesso para o frontend que não tem conteúdo
    }
};

