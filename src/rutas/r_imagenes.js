const express = require('express')
const fs = require('fs-extra')
const multer = require('multer')
const { crearImagen, deletearchivo }= require('../controladores/c_imagenes')
const r_imagenes = express.Router()


const c_imagenes = require('../controladores/c_imagenes')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'archivos/')
    },
    filename:  (req, file, cb)=> {
        cb(null, file.originalname.split('.')[0] + '-' + Date.now() + '.' + file.originalname.split('.')[1])
    }
})

const upload = multer({ storage: storage })



r_imagenes.post('/', upload.single('archivo'), crearImagen)
r_imagenes.delete('/:archivo', deletearchivo)

module.exports = r_imagenes