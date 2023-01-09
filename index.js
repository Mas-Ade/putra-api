const express = require('express'); // variable untuk memanggil modul atau library
const app = express() // deklarasi variable untuk penghubung ke library
const port = 3000
const db = require('./model')
const User = db.user; 
const bodyParser = require('body-parser') // merubah dan menerima data respon menjadi format json
const responses = require('./model/responses');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// app.use(express.json)
// app.use(express.urlencoded({ extended: true}))

db.sequelize.sync();

app.get('/', (req, res) => {
res.send('OK')
})

// 
app.post('/user',(req,res) => {
  try {
    console.log(req.body)
    User.create(req.body).then ((data)=>{
      responses(200, data, ' data berhasi disimpan', res)
    })
  } catch (error) {
    console.log('Error')
  }
})

app.post('/finduser/',(req,res) => {
  try {
    console.log(req.body)
    User.findAll({
      where: {
        email: req.body.email 
      }
    }).then ((data)=>{
      responses(200, data, ' data berhasi diambil', res)
    })
  } catch (error) {
    console.log(error)
  }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })