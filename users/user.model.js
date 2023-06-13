const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
    
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nom: { type: DataTypes.STRING, allowNull: false },
        prenom: { type: DataTypes.STRING, allowNull: false },
        numero: { type: DataTypes.STRING, allowNull: false },
        mail: { type: DataTypes.STRING, allowNull: false },
        adresse: { type: DataTypes.STRING, allowNull: false },
        gouvernorat: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}