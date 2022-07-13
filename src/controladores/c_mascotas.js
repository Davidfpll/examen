const { ObjectId } = require('mongodb');
const m_mascotas = require('../models/m_mascotas');

const c_mascotas = async (req, res)=>{

    const {
        nombre,
        descripcion,
    } = req.body;

    const mascotas = new m_mascotas({
        nombre,
        descripcion,
    });


    const mascotaGuardada = await mascotas.save()
	return res.json({
		nombre,
		descripcion, 
        mensaje: 'Estas dentro de la base de datos de c_mascotas'
	})
}


const getMascotaId = async (req, res)=>{

    if ( !req.administrador ) return res.status(403).send({ok:false, mensaje:"No eres administrador"});

	const Id = req.params.id;
	const mascota = await m_mascotas.findOne({ _id: ObjectId(Id)  });

	return res.send({ ok:true, mascota})
}

const deleteMascotaId = async (req, res)=>{

    if ( !req.administrador) return res.status(403).send({ok:false, mensaje:"No eres administrador"});

	const Id = req.params.id
	const mascota = await m_mascotas.deleteOne({ _id: ObjectId(Id)  });

	return res.send({ ok:true, mascota})
}

const editarMascota = async (req, res)=>{

    if ( !req.administrador) return res.status(403).send({ok:false, mensaje:"No eres administrador"});
	const Id = req.params.id

    const {
        nombre,
        descripcion,
    } = req.body;

	const mascota = await m_mascotas.updateOne({ _id: ObjectId(Id)  },{ nombre, descripcion});

	return res.send({ ok:true, mascota})
}

const listaMascotas = async (req, res)=>{

	const mascota = await m_mascotas.find({});

	return res.send(mascota)
}



module.exports = {
    listaMascotas : listaMascotas,
    crearMascota: c_mascotas,
    getMascotaId : getMascotaId,
    deleteMascotaId : deleteMascotaId,
    editarMascota : editarMascota,
}