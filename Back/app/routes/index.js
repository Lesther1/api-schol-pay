const express = require('express')
const router = express.Router()
const fs = require('fs') //lee el directorio donde se encuentra

const pathRouter = `${__dirname}`

const removeExtension = (fileName) =>{
  return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file)=>{
  const fileWithOutExt = removeExtension(file)
  const skip = ['index'].includes(fileWithOutExt)
  if (!skip) {
    router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
    console.log('cargar ruta---------->',fileWithOutExt)
  }

})

router.get('*',(req, res) =>{ //cuando busca una ruta que no se consigue
  res.status(404)
  res.send({ error: 'Not Found'})
})
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const path = require("path")
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
  apis:[`${path.join(__dirname, "./pagosroute.js")}`] //rutas
}
router.use('/api-doc', swaggerUI.serve , swaggerUI.setup(swaggerJsDoc(swaggerSpec))) //ruta de la documentacion


module.exports = router
