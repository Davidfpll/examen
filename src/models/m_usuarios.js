const mongoose = require('mongoose')

var Schema = mongoose.Schema

var EsquemaUsuario = new Schema ({
	nombre: String, 
	user: String, 
	pass: String,
	token: String || null,
	roles: [String]
})

const m_usuarios = mongoose.model('usuarios', EsquemaUsuario)

module.exports = m_usuarios