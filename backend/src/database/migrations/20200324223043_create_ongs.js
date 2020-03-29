
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');  
};
