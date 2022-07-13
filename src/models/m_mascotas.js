const mongoose = require('mongoose')

var Schema = mongoose.Schema

var EsquemaMascotas = new Schema ({
	id: Number, 
	nombre: String, 
	descripcion: String
})

const m_mascotas = mongoose.model('mascotas', EsquemaMascotas)

module.exports = m_mascotas