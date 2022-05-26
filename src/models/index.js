const Psicologo = require("./psicologos");
const Paciente = require("./pacientes");
const Atendimento = require("./atendimentos");

Psicologo.hasMany(Atendimento, {
  foreignKey: "psicologo_id",
});

Paciente.hasMany(Atendimento, {
  foreignKey: "paciente_id",
});

Atendimento.belongsTo(Psicologo, {
  foreignKey: "psicologo_id",
});

Atendimento.belongsTo(Paciente, {
    foreignKey: "paciente_id",
});

module.exports = {
    Psicologo,
    Paciente,
    Atendimento,
};