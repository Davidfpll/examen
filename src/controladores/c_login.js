const jwt = require('jsonwebtoken');
const { Palabrasecreta } = require('../middleware/auth');
const m_usuarios = require("../models/m_usuarios");

const crearLogin = async (req, res)=>{
    const {
        user,
        pass,
    } = req.body;
    
    const usuarios = await m_usuarios.findOne({user, pass});
    
    const token = jwt.sign({
        data: {
            user: usuarios.user,
            pass: usuarios.pass,
            roles: usuarios.roles
        }
    }, Palabrasecreta);
    
    const insertarToken = await m_usuarios.updateOne({user, pass},{token: token});
    
	return res.send({ nombre: usuarios.nombre, user: usuarios.user, pass: usuarios.pass, token: token })

}



module.exports = {
    crearLogin : crearLogin
}