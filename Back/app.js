require('dotenv').config()//variables de entorno
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000 //puerto declarado en la variable de entorno
const { dbConnect } = require('./config/mongo') //requiere la conexion
const path = require("path")


//swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpec ={ //inicio de swagger
  definition:{
    openapi: "3.0.0",
    info:{
      title:"school pay api",
      version: "1.0"
    },
    servers:[
      {
        url: "https://school-finish.onrender.com/api/1.0/pagosroute"
      }
    ]
  },
  apis:[`${path.join(__dirname, "./app/routes/pagosroute.js")}`] //rutas
}

app.use(cors())
app.use(express.json()) //permite envie de datos

app.use('/api/1.0', require('./app/routes')) //ruta de la api
app.use('/api-doc', swaggerUI.serve , swaggerUI.setup(swaggerJsDoc(swaggerSpec))) //ruta de la documentacion

dbConnect()
app.listen(PORT, ()=>{ //Api escuchando
  console.log('api lista por el puerto', PORT)
})
