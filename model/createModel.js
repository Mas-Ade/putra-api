const Sequelize = require  ('sequelize');

const sequelize = new Sequelize ('db_sequelize', 'postgres', 'postgres', {
    host: 'localhost', port: 5432, dialect: 'postgres'
})

// script untuk test koneksi database dengan menggunakan authenticate dan memakai method promise then jika berhasil serta catch jika gagal
// sequelize.authenticate().then(()=> {
//     console.log('database berhasil terhubung')
// }).catch((err)=>{
//     console.log('database gagal terhubung ! ')
// })
// console.log('sedang memproses untuk promise')

// membuat table dengan sequelize
const User = sequelize.define('user', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    username: {
        type: Sequelize.DataTypes.STRING
    },
    password: {
        type: Sequelize.DataTypes.STRING
    },
    age: {
        type: Sequelize.DataTypes.INTEGER
    },
    Code: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
    },
    token: {
        type: Sequelize.DataTypes.STRING
    }

});

 // sync() membuat table jika itu belum tersedia sebelumnya
User.sync().then((data)=>{
console.log("table berhasil sinkron dan dibuat !")
}).catch(()=>{
    console.log(' Gagal Sinkron table tidak dibuat !!! ')
})

//  sync({force: true}) membuat table, mengapus table sebelumnya jika namanya sama lalu dibuat table baru (masih error)
// User.sync({force: true }).then((data)=>{
//     console.log("table berhasil sinkron dan dibuat !")
//     }).catch(()=>{
//         console.log(' Gagal Sinkron table tidak dibuat !!! ')
//     })

// sync({alter: true}) scan database apakah sudah ada setelah, jika sama maka akan menimpa database yang sama serta 
//menambahkan jika ada penambahan column
// User.sync({alter: true }).then((data)=>{
//     console.log("table berhasil sinkron dan dibuat !")
//     }).catch(()=>{
//         console.log(' Gagal Sinkron table tidak dibuat !!! ')
//     })