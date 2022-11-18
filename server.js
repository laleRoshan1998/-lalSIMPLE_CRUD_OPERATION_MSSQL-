const express = require('express')
const app = express()
const port = 8080


app.use(express.json())

const maincontroller = require('./productController.js')

app.use('/',maincontroller)


app.listen(port,()=>{
    console.log('server is connect............');
})