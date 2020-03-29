const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('institute', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        connection.destroy();
    });

    // para setar uma variavel de header:
    // .post('/institutes')
    // .set('Authorization', '6cf79a5d')
    // .send({outros campos aqui})

    it('should be able to create a new Institute', async () => {
        const response = await request(app)
        .post('/institutes')
        .send({
            name: "SEBRAE",
            email: "sebrae@gmail.com",
            whatsapp: "5554996163110",
            city: "Caxias do sul",
            uf: "RS"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});