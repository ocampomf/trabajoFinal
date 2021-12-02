module.exports = (sequelize, dataTypes) => {

let alias = "Artista";


let cols = {


    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    nombre: {
        type: dataTypes.STRING,
        allowNull: false
    },

    apellido : {
        type: dataTypes.STRING,
        allowNull: false
    },

};

let config = {
        tableName: "artistas",
        timestamps: false
       
}




const Artista = sequelize.define(alias, cols, config);


Artista.associate = (models) => {
    // 
    Artista.hasMany(models.Cancion, {
        as: "canciones",
        foreignKey: "artista_id",
    });
};

return Artista;
}
