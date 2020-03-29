const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const institutes = await connection('institutes').select('*');

        return response.json(institutes);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = generateUniqueId();

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