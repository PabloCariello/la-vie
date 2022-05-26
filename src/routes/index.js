const express = require("express");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");
const loginController = require("../controllers/loginController");
const dashboardController = require("../controllers/dashboardController")


//Importar validações
const validarPsicologo = require('../validations/psicologos');
const validarPaciente = require('../validations/pacientes');
const validarAtendimento = require('../validations/atendimentos');
const validarLogin = require('../validations/auth/login');
const auth = require('../middlewares/auth')

const routes = express.Router();

routes.post('/login', validarLogin, loginController.login);

routes.post('/psicologos', validarPsicologo, psicologosController.cadastro);
routes.get('/psicologos', psicologosController.listarTodos);
routes.get('/psicologos/:id', psicologosController.listarID);
routes.put('/psicologos/:id', validarPsicologo, psicologosController.atualizar);
routes.delete('/psicologos/:id', psicologosController.deletar);

routes.post('/pacientes', validarPaciente, pacientesController.cadastro);
routes.get('/pacientes', pacientesController.listarTodos);
routes.get('/pacientes/:id', pacientesController.listarID);
routes.put('/pacientes/:id', validarPaciente, pacientesController.atualizar);
routes.delete('/pacientes/:id', pacientesController.deletar);

routes.post("/atendimentos", auth, validarAtendimento, atendimentosController.cadastro);
routes.get("/atendimentos", atendimentosController.listarTodos);
routes.get("/atendimentos/:id", atendimentosController.listarID);

routes.get("/dashboard/numero-de-pacientes", dashboardController.listarPacientes);
routes.get("/dashboard/numero-de-atendimentos", dashboardController.listarAtendimentos);
routes.get("/dashboard/numero-de-psicologos", dashboardController.listarPsicologos);
routes.get("/dashboard/media-atendimento-psicologos", dashboardController.mediaAtendimentoPsicologo);




module.exports = routes