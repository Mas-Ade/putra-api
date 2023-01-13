// file untuk trial squelize only belum dibuat ke api

const express = require('express'); // variable untuk memanggil modul atau library
const app = express() // deklarasi variable untuk penghubung ke library
const port = 5000 // dekarasi port

console.log("Server berhasil aktif")


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })