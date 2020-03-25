const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id} = request.body;

        const institute = await connection('institutes')
            .where('id', id)
            .select('name')
            .first(); // obriga o JS a retornar apenas um resultado e nao um array, pois eh uma busca por id
        
        if (!institute){
            return response.status('400').json({error:'No Institute found with this ID'});
        }

        return response.json(institute);

    }
}