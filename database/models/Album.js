module.exports = (sequelize, dataTypes) => {

let alias = "Album";


let cols = {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    nombre: {
        type: dataTypes.STRING,
        unique: true,
        allowNull: false
    },

    duracion: {
        type: dataTypes.INTEGER,
        allowNull: true
    },

};
    let config = {  
        tableName: "albumes",
        timestamps: false
       
        
}
    



const Album = sequelize.define(alias, cols, config);


Album.associate = (models) => {
    // 
    Album.hasMany(models.Cancion, {
        as: "canciones",
        foreignKey: "album_id",
    });
};

return Album;
}