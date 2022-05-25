const db = require('../databases');
const { DataTypes } = require('sequelize');

const Psicologo = db.define('Cliente', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apresentacao:{
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "psicologos",
    timestamps: false,
    underscored: false
})

module.exports = Psicologo;