const m_usuarios = require('../models/m_usuarios')


const c_usuarios = async (req, res)=>{



    const {
        nombre,
        user, 
        pass 
    } = req.body;


    const usuario = new m_usuarios({
        nombre,
        user,
        pass,
        token: null,
        roles:['Registrado']
    });


    const usuarioGuardado = await usuario.save()
	res.json({
		nombre,
		user,
        mensaje: 'Estas dentro de la base de datos de c_registro'
	})
}

module.exports = {
    crearRegistro: c_usuarios
}
