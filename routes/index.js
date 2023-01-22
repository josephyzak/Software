const express = require("express");

const {
    Pagina_inicio,
    vista_login,
    click_autentificar,
    click_registrar,
    vista_true,
    vista_false,
    vista_Home,
    vista_DashBoard,
    vista_Configuracion,
    vista_Ayuda,
    Out
} = require("../controllers/PageControllers");

const router = express.Router();

router.get("/", Pagina_inicio);
router.get("/login", vista_login);

router.post("/autentificar", click_autentificar);
router.post("/registrar", click_registrar);

router.get("/true", vista_true);
router.get("/false", vista_false);

router.get("/Home", vista_Home);
router.get("/DashBoard", vista_DashBoard);
router.get("/Configuracion", vista_Configuracion);
router.get("/Ayuda", vista_Ayuda);
router.get("/Out", Out);

module.exports = {router: router};