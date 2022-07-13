const express = require('express')
const { crearLogin }= require('../controladores/c_login')
const r_login = express.Router()


const c_login = require('../controladores/c_login')


r_login.post('/', crearLogin)

module.exports = r_login