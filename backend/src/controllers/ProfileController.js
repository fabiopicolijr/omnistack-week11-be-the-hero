const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const institute_id = request.headers.authorization;
        
        const incidents = await connection('incidents')
            .where('institute_id', institute_id)
            .select('*');

        return response.json(incidents);
    }
}