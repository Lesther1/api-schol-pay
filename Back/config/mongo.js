const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const dbConnect = ()=>{
    const DB_URI = process.env.DB_URI //Se conecta a la url
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (err, res)=>{
        if(!err){
          console.log('***CONEXION CORRECTA***')
        }else{
          console.log('***ERROR DE CONEXION***')
        }
    })

}
module.exports = { dbConnect }
