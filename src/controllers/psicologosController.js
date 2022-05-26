const Psicologo = require('../models/psicologos');
const bcrypt = require ('bcryptjs');

const psicologosController = {
    async cadastro (req, res) {
        const { nome, email, senha, apresentacao } = req.body;
        const novaSenha = bcrypt.hashSync(senha, 10);
        const novoPsicologo = await Psicologo.create({nome, email, senha: novaSenha, apresentacao})
        
        return res.status(201).json(novoPsicologo)
    },

    async listarTodos (req, res) {
        const todosPsicologo = await Psicologo.findAll();
        res.json(todosPsicologo);
    },

    async  listarID (req, res) {
        const {id} = req.params;
        const psicologo = await Psicologo.findByPk(id);
        if (!psicologo){
            return res.status(404).json({message: "Psicologo não encontrado"});
        }
        res.json(psicologo)
    },

    async atualizar (req, res){
        const {id} = req.params;
        const {nome, email, senha, apresentacao} = req.body;
        const psicologo = await Psicologo.findByPk(id);
        if (!psicologo){
            return res.status(404).json({message: "Psicologo não encontrado"});
        }
        psicologo.nome = nome;
        psicologo.email = email;
        psicologo.senha = senha;
        psicologo.apresentacao = apresentacao;
        await psicologo.save();

        res.json(psicologo);
    },

    async deletar (req, res){
        const {id} = req.params;
        const psicologo = await Psicologo.findByPk(id);
        if (!psicologo){
            return res.status(404).json({message: "Psicologo não encontrado"});
        }
        await psicologo.destroy()
        res.status(204)
    }
}

module.exports = psicologosController;