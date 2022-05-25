const Paciente = require('../models/pacientes');

const pacientesController = {
    async cadastro (req, res) {
        const { nome, email, data_nascimento } = req.body;
        const novoPaciente = await Paciente.create({nome, email, data_nascimento})
        
        return res.status(201).json(novoPaciente)
    },

    async listarTodos (req, res) {
        const todosPaciente = await Paciente.findAll();
        res.json(todosPaciente);
    },

    async  listarID (req, res) {
        const {id} = req.params;
        const paciente = await Paciente.findByPk(id);
        if (!paciente){
            return res.status(404).json({message: "Paciente não encontrado"});
        }
        res.json(paciente)
    },

    async atualizar (req, res){
        const {id} = req.params;
        const {nome, email, data_nascimento} = req.body;
        const paciente = await Paciente.findByPk(id);
        if (!paciente){
            return res.status(404).json({message: "Paciente não encontrado"});
        }
        paciente.nome = nome;
        paciente.email = email;
        paciente.data_nascimento = data_nascimento;
        await paciente.save();

        res.json(paciente);
    },

    async deletar (req, res){
        const {id} = req.params;
        const paciente = await Paciente.findByPk(id);
        if (!paciente){
            return res.status(404).json({message: "Paciente não encontrado"});
        }
        await paciente.destroy();
        res.status(204).json({message: "Paciente deletado"});
    }
}

module.exports = pacientesController;