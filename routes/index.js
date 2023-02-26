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
    vista_Iluminacion,
    vista_Ayuda,
    Out,
    api_upgrate_peristaltica,
    api_apdate_peristaltica,
    api_parpadea,
    api_LED
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
router.get("/Iluminacion", vista_Iluminacion);
router.get("/Ayuda", vista_Ayuda);
router.get("/Out", Out);

router.post("/api/upgrate/peristaltica/:ID/:tipo/:paso",api_upgrate_peristaltica);
router.get("/api/update/peristaltica/all", api_apdate_peristaltica);

router.post("/api/parpadea/:Data",api_parpadea);

router.post("/api/LED/:led1/:led2/:led3/:led4/:led5/:led6/:led7/:led8", api_LED);

module.exports = {router: router};