const { ObjectId } = require("mongodb");
const m_usuarios = require("../models/m_usuarios")

const leerUsuario = async (req, res)=>{

	const usuarios = await m_usuarios.find({});

	return res.send(usuarios)
}
const updateUsuario = async (req, res)=>{

	console.log(req.administrador);

	if ( !req.administrador) return res.status(403).send({ok:false, mensaje:"No eres administrador"});
	const Id = req.params.id

    const {
        nombre,
        user,
    } = req.body;

	const usuario = await m_usuarios.updateOne({ _id: ObjectId(Id) },{ nombre, user});

	return res.send({ ok: true, usuario})
}

const borrarUsuarioId = async (req, res)=>{

	if ( !req.administrador) return res.status(403).send({ok:false, mensaje:"No eres administrador"});
	const _id = req.params.id

	const usuario = await m_usuarios.deleteOne({ _id: ObjectId(_id) });

	return res.send({ ok: true, usuarioBorado: usuario })
}


module.exports = {
    leerUsuario: leerUsuario,
    updateUsuario: updateUsuario,
	borrarUsuarioId: borrarUsuarioId
}
