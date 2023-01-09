const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize (
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,{
        host: dbConfig.host,
        dialect: 'postgres'   
    }
)

const db = {} ;

db.Sequelize = Sequelize; // mengisi object  konstanta db dengan package squilize
db.sequelize = sequelize; // mengisi object  konstanta db dengan  const sequelize
db.user = require('./user.model')(sequelize, Sequelize);

module.exports = db


