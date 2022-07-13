const express = require('express')
const { crearMascota, getMascotaId, deleteMascotaId, editarMascota, listaMascotas }= require('../controladores/c_mascotas')
const r_mascotas = express.Router()


const c_mascotas = require('../controladores/c_mascotas')
const { auth } = require('../middleware/auth')


r_mascotas.get('/', listaMascotas) 
r_mascotas.post('/', auth, crearMascota) 
r_mascotas.get('/:id', auth, getMascotaId) 
r_mascotas.put('/:id', auth, editarMascota) 
r_mascotas.delete('/:id', auth, deleteMascotaId) 

module.exports = r_mascotas