exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('institute_id').notNullable();

        table.foreign('institute_id').references('id').inTable('institutes');

      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
