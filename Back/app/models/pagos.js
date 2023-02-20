const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
    receipt:{
      type: Number
    },
    date:{
      type: String
    },
    name:{
      type: String
    },
    concept:{
      type: String
    },
    value:{
      type: Number
    }
},
  {
    timestamps: true, //fecha de creacion
    versionKey: false //quita el _V
  })

  module.exports = mongoose.model('pagos',pagoSchema)
