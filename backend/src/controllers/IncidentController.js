const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('institutes', 'institutes.id', '=', 'incidents.institute_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*', 
                'institutes.name', 
                'institutes.email', 
                'institutes.whatsapp', 
                'institutes.uf']);
        
            response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        const {title, description, value} = request.body;
        const institute_id = request.headers.authorization;

        /* Jeito 1
        const result = await connection('incident').insert({
            title,
            description,
            value,
            institute_id
        });
        const id = result[0];
        */

        // Jeito 2 
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            institute_id
        });

        return response.json({id});
    },

    async delete(request, response){
        const {id} = request.params;
        const institute_id = request.headers.authorization;

        console.log(id);
        console.log(request.headers.authorization);

        const incident = await connection('incidents')
            .where('id', id)
            .select('institute_id')
            .first();

        
        if(incident.institute_id != institute_id){
            return response.status(401).json({ error: 'Operation not permited.'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}