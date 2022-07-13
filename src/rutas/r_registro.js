const express = require('express')
const { crearRegistro }= require('../controladores/c_registro')
const r_registro = express.Router()


const c_registro = require('../controladores/c_registro')


r_registro.post('/', crearRegistro)

module.exports = r_registro