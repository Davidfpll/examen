const express = require('express')
const { leerUsuario,updateUsuario , borrarUsuarioId }= require('../controladores/c_usuarios')
const r_usuarios = express.Router()


const c_usuarios = require('../controladores/c_usuarios')
const { auth } = require('../middleware/auth')

r_usuarios.get('/', leerUsuario)
r_usuarios.put('/:id', auth, updateUsuario)
r_usuarios.delete('/:id', auth, borrarUsuarioId)

module.exports = r_usuarios