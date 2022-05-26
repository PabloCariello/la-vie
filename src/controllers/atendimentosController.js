//Pegar nome do psicologo a partir do token

const { Atendimento, Paciente, Psicologo } = require('../models/');

const atendimentosController = {

    async cadastro (req, res) {
        const {data_atendimento, observacao, paciente_id, psicologo_id} = req.body;
        const { id } = req.auth
        const novoAtendimento = await Atendimento.create({data_atendimento, observacao, paciente_id, psicologo_id: id})
        res.status(201).json(novoAtendimento)
    },


    async listarTodos (req, res) {
        const todosAtendimento = await Atendimento.findAll({
            include: [Paciente,{model: Psicologo, attributes: {exclude: ["senha"]}}]
        });
        res.json(todosAtendimento);
    },

    async listarID (req, res) {
        const {id} = req.params;
        const atendimento = await Atendimento.findByPk(id, {
            include: [Paciente,{model: Psicologo, attributes: {exclude: ["senha"]}}]
        });
        if (!atendimento){
            return res.status(404).json({message: "Paciente não encontrado"});
        }
        res.json(atendimento)
    },
};

    module.exports = atendimentosController;