module.exports = (sequelize, dataTypes) => {

    let alias = "Cancion";


let cols = {


    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    titulo: {
        type: dataTypes.STRING,
        unique: true,
        allowNull: false
    },

    duracion: {
        type: dataTypes.INTEGER,
        allowNull: true
    },


    created_at: {
        type: dataTypes.STRING,
        unique: true,
        allowNull: true

    },

    updated_at: {
        type: dataTypes.STRING,
        unique: true,
        allowNull: true
    }



};
    let config = {  
        tableName: "canciones",
        timestamps: false,
        deletedAt: false
}
    


const Cancion = sequelize.define(alias, cols, config);



Cancion.associate = (models) => {
    // ASOCIACION CON GENEROS
    Cancion.belongsTo(models.Genero, {
        as: "generos",
        foreignKey: "genero_id",
    });

    Cancion.belongsTo(models.Album, {
        as: "albumes",
        foreignKey: "album_id",
    });

    Cancion.belongsTo(models.Artista, {
        as: "artistas",
        foreignKey: "artista_id",
    });
};
return Cancion;
}