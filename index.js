const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors');
require('dotenv').config()

const db = require('./database')
const r_registro = require('./src/rutas/r_registro')
const r_login = require('./src/rutas/r_login')
const r_mascotas = require('./src/rutas/r_mascotas')
const r_usuarios = require('./src/rutas/r_usuarios')
const r_imagenes = require('./src/rutas/r_imagenes')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/api/registro', r_registro)
app.use('/api/login', r_login)
app.use('/api/mascotas', r_mascotas)
app.use('/api/usuarios', r_usuarios)
app.use('/api/upload', r_imagenes)


db.on('connected', ()=>{
    console.log('Base de datos conectada correctamente')
})


app.get('/', (req, res)=>{
    res.send('Estas en la raiz')
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en puerto ${PORT}`)
})