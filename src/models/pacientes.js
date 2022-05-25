const db = require('../databases');
const { DataTypes } = require('sequelize');

const Paciente = db.define('Cliente', {
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
    data_nascimento:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
}, {
    tableName: "pacientes",
    timestamps: false,
    underscored: false
})

module.exports = Paciente;