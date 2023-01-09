const { Sequelize } = require("sequelize");

// standard ES6 membuat parent child class
// standrad sebelumnya class sequelize extends Sequelize {}

module.exports = ( sequelize,Sequelize) => {
    // define dipakai untuk define ke database
    const User = sequelize.define('user',{
        email:{
            type: Sequelize.STRING
        },
        nama:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        }
    })

    return User
}

