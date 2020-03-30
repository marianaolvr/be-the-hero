const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');     

describe('ONG', () => {
    //fazer antes dos testes para rodar as migrates
    beforeEach(async () => {
        await connection.migrate.rollback(); //zerar o DB antes de executar
        await connection.migrate.latest();
    });


    //fazer depois dos testes para quebrar a conexão com o DB
    afterAll( async () => {
        await connection.destroy();
    });

it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ong N3",
                email: "contatoong3@as.com.br",
                whatsapp: "01234567891",
                city: "Salvador",
                uf: "BA"
            });

    
            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});