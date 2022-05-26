const { Psicologo, Paciente, Atendimento } = require('../models')

const dashboardController = {

    async listarPsicologos (req, res) {

        const psicologos = await Psicologo.count();
        res.json(psicologos)
        

    },

    async listarPacientes (req, res) {

        const pacientes = await Paciente.count();
        res.json(pacientes)
        

    },

    async listarAtendimentos (req, res) {

        const atendimentos = await Atendimento.count();
        res.json(atendimentos);
        

    },

    async mediaAtendimentoPsicologo (req, res) {

        const psicologos = await Psicologo.count();
        const atendimentos = await Atendimento.count();
        const mediaAtendimentoPsicologo = atendimentos / psicologos
        res.json(mediaAtendimentoPsicologo)
        

    },
}





module.exports = dashboardController