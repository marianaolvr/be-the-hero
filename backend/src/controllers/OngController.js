const connection = require('../database/connection');
const crypto = require('crypto'); //vem com o node e gera um texto aleatório

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //desestruturação para pegar cada dado em uma variavel separada {} garante que o usuário não envie dado que não quero
        const id = crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de letras como id
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({ id })
    }
};