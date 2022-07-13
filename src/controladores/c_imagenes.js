const fs = require('fs-extra')

module.exports = {
    crearImagen : (req, res)=>{
        res.json({
            mensaje: "ok, estas en imagenes",
            nombre: req.file.originalname
        })
    },
	deletearchivo : async (req, res)=>{
        const file = req.params.archivo
        await fs.remove('archivos/'+file) 
    },
}
