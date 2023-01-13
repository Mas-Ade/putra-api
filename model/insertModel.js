const Sequelize = require  ('sequelize');
const { DataTypes } = Sequelize;

const sequelize = new Sequelize ('db_sequelize', 'postgres', 'postgres', {
host: 'localhost', port: 5432, dialect: 'postgres'
})

// membuat table dengan sequelize
const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
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

 // insert data dengan squelize dengan build
// User.sync({alter: true}).then(()=> {
//     const user = User.build({
//         id: 3,username:'Bakir', password: 1234, age:50, code: true,token: 'user-125xy'});
//         console.log(user.id);
//     console.log(user.username);
//     console.log(user.password);
//     console.log(user.age);
//     console.log(user.code);
//     console.log(user.token);
//     return user.save();
//     }).then(()=> {
//         console.log("data telah berhasil di input")
//     })
//  .catch((err)=>{
// console.log('insert data ERROR !! ')
//         })

        
 // insert data dengan squelize dengan method create
 User.sync({alter: true}).then(()=> {
    return User.create({
        id: 4,
        username:'bambang',
        password: 12345,
        age: 29,
        code: true,
        token: 'user-12345'
 })
}).then((data)=> {
console.log(data.toJSON())
console.log('data berhasil tersimpan')
})
 .catch((err)=>{
console.log('insert data ERROR !! ')
        })


// insert data tanpa id (error belum berhasil)
        // User.sync({alter: true}).then(()=> {
        //     const user = User.build({
        //     username:'qodir', password: 1234, age:23, code: true,token: 'user-123xy'});
        //     console.log(user.id);
        //     console.log(user.username);
        //     console.log(user.password);
        //     console.log(user.age);
        //     console.log(user.code);
        //     console.log(user.token);
        //     return user.save();
        //     }).then(()=> {
        //         console.log("data telah berhasil di input")
        //     })
        //  .catch((err)=>{
        // console.log('insert data ERROR !! ')
        //         })
 
        