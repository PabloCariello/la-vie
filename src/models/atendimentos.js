const db = require('../databases');
const { DataTypes } = require('sequelize');

const Psicologo = require("./psicologos");
const Paciente = require("./pacientes");

const Atendimento = db.define('Cliente', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    data_atendimento:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    observacao:{
        type: DataTypes.STRING,
        allowNull: false
    },
    psicologo_id:{
        type: DataTypes.INTEGER,
        References: {
            model: Psicologo,
            key: "id",
        },
        allowNull: false
    },
    paciente_id:{
        type: DataTypes.INTEGER,
        References: {
            model: Paciente,
            key: "id",
        },
        allowNull: false
    }
}, {
    tableName: "atendimentos",
    timestamps: false,
    underscored: false
})

module.exports = Atendimento;