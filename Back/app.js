require('dotenv').config()//variables de entorno
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000 //puerto declarado en la variable de entorno
const { dbConnect } = require('./config/mongo') //requiere la conexion

app.use(cors())
app.use(express.json()) //permite envie de datos

app.use('/api/1.0', require('./app/routes'))

dbConnect()
app.listen(PORT, ()=>{ //Api escuchando
  console.log('api lista por el puerto', PORT)
})
