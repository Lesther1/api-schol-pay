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

module.exports = router
