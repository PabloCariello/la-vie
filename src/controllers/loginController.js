const Psicologos = require('../models/psicologos')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = require('../configs/secret')

const loginController = {
    async login(req, res) {
        const { email, senha } = req.body
        const psicologo = await Psicologos.findOne({
            where: {
                email
            }
        })

        if (!psicologo) {
            return res.status(400).json('E-mail não cadastrado')
        }
        if (!bcrypt.compareSync(senha, psicologo.senha)){
            return res.status(401).json("senha invalida")
        }

        const token = jwt.sign(
            {
                id: psicologo.id, 
                email: psicologo.email, 
                nome: psicologo.nome
            },
            secret.key
        )
        return res.json(token)

    }
}

module.exports = loginController;
