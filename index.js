const express = require('express'); // variable untuk memanggil modul atau library
const app = express() // deklarasi variable untuk penghubung ke library
const port = 3000 // dekarasi port
const db = require('./model') // import class db from folder model
const User = db.user; 
const bodyParser = require('body-parser') // merubah dan menerima data respon menjadi format json
const responses = require('./model/responses'); // import format responses yang sudah dibuat
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

db.sequelize.sync();

app.get('/', (req, res) => {
try{
  console.log(req.body)
}catch(error){
  console.log(error);
}
})

// 
// app.post('/user',(req,res) => {
//   try {
//     console.log(req.body)
//     User.create(req.body).then ((data)=>{
//       responses(200, data, ' data berhasi disimpan', res)
//     })
//   } catch (error) {
//     console.log('Error')
//   }
// })

// app.post('/finduser/',(req,res) => {
//   try {
//     console.log(req.body)
//     User.findAll({
//       where: {
//         email: req.body.email 
//       }
//     }).then ((data)=>{
//       responses(200, data, ' data berhasi diambil', res)
//     })
//   } catch (error) {
//     console.log(error)
//   }
// })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })