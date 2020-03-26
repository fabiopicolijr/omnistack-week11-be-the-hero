exports.up = function(knex) {

    // caguei o banco, mas a culpa foi do Diego porque eu segui o que estava no video, pqp. uahsuhashuahushuas.
    return knex.schema.dropTable('ongs');
};

exports.down = function(knex) {
    return "";
};
