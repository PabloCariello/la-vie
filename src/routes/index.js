const express = require("express");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");
const loginController = require("../controllers/loginController");

//Importar validações
const validarPsicologo = require('../validations/psicologos');
const validarPaciente = require('../validations/pacientes')

const routes = express.Router();

routes.post('/psicologos', validarPsicologo, psicologosController.cadastro);
routes.get('/psicologos', psicologosController.listarTodos)
routes.get('/psicologos/:id', psicologosController.listarID)
routes.put('/psicologos/:id', validarPsicologo, psicologosController.atualizar)
routes.delete('/psicologos/:id', psicologosController.deletar) 

routes.post('/pacientes', validarPaciente, pacientesController.cadastro);
routes.get('/pacientes', pacientesController.listarTodos)
routes.get('/pacientes/:id', pacientesController.listarID)
routes.put('/pacientes/:id', validarPaciente, pacientesController.atualizar)
routes.delete('/pacientes/:id', pacientesController.deletar) 

/*routes.get("/atendimentos", atendimentosController.//const criada no controllers)
routes.get("/atendimentos/:id", atendimentosController.//const criada no controllers)
routes.post("/atendimentos", auth, atendimentosController.//const criada no controllers)*/

module.exports = routes