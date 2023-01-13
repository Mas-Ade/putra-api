const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');

// const sequelize = new Sequelize (
//     dbConfig.database,
//     dbConfig.user,
//     dbConfig.password,{
//         host: dbConfig.host,
//         dialect: 'postgres'   
//     }
// )

// buat clasas untuk konek database via squelize format parameter ('database', 'user', 'password', {'host'},{'port'},{'dialect'})
const sequelize = new Sequelize ('db_bingle', 'postgres','postgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
})

sequelize.authenticate().then(() => {
    console.log('koneksi database berhasil')
}).catch((error)  => {
    console.log('database error');
})
console.log('trial connect database')

const db = {} ;

db.Sequelize = Sequelize; // mengisi object  konstanta db dengan package squilize
db.sequelize = sequelize; // mengisi object  konstanta db dengan  const sequelize
db.user = require('./user.model')(sequelize, Sequelize);

module.exports = db


