
const db = require("../../database/models");
const Op = db.Sequelize.Op;
const apiCancionesController = {

all: (req,res) => {
     db.Cancion.findAll({
//      include: ['generos','artistas','albumes']

     })
    .then(canciones => {
    return res.json(canciones)
}).catch((e)=>{console.log (e)});
},


create: (req, res) =>{
     db.Cancion.create(req.body)
        .then(cancion =>{
          return res.status(200).json({
            data:cancion,
            status:200
          })
        })
},

mostrarUna: (req, res) => {
      db.Cancion.findByPk(req.params.id)
      .then(cancion => {
        return res.status(200).json({
          data:cancion,
          status:200
        })
      })
},


edit: (req, res) => {
      
          let cancionId = req.params.id;
          db.Cancion
          .update(
              {
               titulo: req.body.titulo,
               duracion: req.body.duracion,
               created_at: req.body.created_at,
               updated_at: req.body.updated_at,
               genero_id: req.body.genero_id,
               album_id: req.body.album_id,
               artista_id: req.body.artista_id,

              },
              {
                  where: {id: cancionId}
              })
              .then(cancion => {
                return res.status(200).json({
                  data:cancion,
                  status:200
                })
              })
  
},



delete: (req, res) => {
      db.Cancion.destroy({
      where: {
      id: req.params.id 
  }
})
.then(response => {
  return res.json(response)
})
},


mostrarGeneroCancion: (req,res) => {
  
  db.Genero.findAll(
    {
        include: ['canciones']
    })
    .then(generos => {
      return res.json(generos)
    }
  )

.catch((e)=>{console.log (e)});
},







}



module.exports = apiCancionesController;


