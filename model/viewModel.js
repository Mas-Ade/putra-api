const Sequelize = require  ('sequelize');
const { DataTypes } = Sequelize;
const sequelize = require ('../config/ConnectionPG')


// re-check koneksi ke database
sequelize.authenticate().then(() => {
    console.log('koneksi database berhasil')
}).catch((error)  => {
    console.log('database error');
})
console.log('trial connect database');

// =============================================================

//membuat table dengan sequelize
const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    Code: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    token: {
        type: DataTypes.STRING
    }

});

 // Select All data table
User.sync({alter: true})
.then(()=> {
    return User.findAll()
}).then((data)=> {
    data.forEach((element) => {
        console.log(element.toJSON())
    });
})
.catch((err)=> {
    console.log(err)
})

        