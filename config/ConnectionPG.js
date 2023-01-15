const Sequelize = require('sequelize');

const sequelize = new Sequelize ('db_sequelize', 'postgres', 'postgres', {
    host: 'localhost', port: 5432, dialect: 'postgres'
    });

module.exports = sequelize
// untuk membuat object dalam bentuk modul harus di export setelahnya agar bisa dipanggil modulnya