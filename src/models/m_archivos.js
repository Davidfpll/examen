const mongoose = require('mongoose')

var Schema = mongoose.Schema


var EsquemaArchivos = new Schema ({ 
	nombre: String, 
	archivo: String
})

const m_archivos = mongoose.model('archivos', EsquemaArchivos)

module.exports = m_archivos