const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        const institutes = await connection('institutes').select('*');

        return response.json(institutes);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('institutes').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({id});
    }
}