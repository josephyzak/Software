const DBConnector = require("../BaseData/database.js");

const AesEncryption = require("aes-encryption");
const aes = new AesEncryption();
aes.setSecretKey('11122233344455566677788822244455555555555555555231231321313aaaff');

var gpiop = require('rpi-gpio').promise;

const Pagina_inicio = (req, res) => {
    res.render("./view/1_Pagina_inicio.ejs", {layout: false});
};
const vista_login = (req, res) => {
    if (req.session.var_logging) {
        res.redirect("/Home");
    } else {
        res.render("./user/login.ejs", {layout: false});
    }
};
const click_autentificar = async(req, res) => {
    const mando = "SELECT ID, password, nombre, tipo, color, img FROM usuarios WHERE email = ?";
    const Usuario = req.body.email;
    const Password = req.body.password;

    await DBConnector.queryWithParams(mando, [Usuario])
    .then((result) => {
        if (result.length == 0 || !(Password == aes.decrypt(result[0].password))) {
            req.session.var_logging = false;
            req.session.save();
            res.redirect("/false");
        } else {
            req.session.Nombre_ = result[0].nombre;
            req.session.Tipo_ = result[0].tipo;
            req.session.myID_ = result[0].ID;
            req.session.valor_dark = result[0].color;
            req.session.myImg = result[0].img;
            req.session.var_logging = true;
            req.session.save();
            res.redirect("/true");
        }
    });
};
const click_registrar = async(req, res) => {
    const Usuario = req.body.email;
    const Nombre = req.body.nombre;
    const Tipo = req.body.tipo;
    const Password = req.body.password1;
    const Password2 = req.body.password2;
    var ruta;
    if (!req.files) {
        ruta = "./img/profile-1.jpg";
    } else {
        var filee = req.files.myFile;
        var fileename = filee.name;
        filee.mv("./public/img/" + fileename);
        ruta = "./img/" + fileename;
    }
    if (Password == Password2){
        try {
            const mando = "INSERT INTO usuarios(email, password, nombre, tipo, color, img) values (?,?,?,?,?,?)";
            await DBConnector.queryWithParams( mando, [Usuario, aes.encrypt(Password2), Nombre, Tipo, 0, ruta])
            .then(()=>{
                res.render("./user/login.ejs", {layout : false});
            });
        } catch (error) {
            res.render("./user/login.ejs", {layout : false});
            console.log(error);
        }
    } else {
        res.render("./user/login.ejs", {layout : false});
    }
};
const vista_true = (req, res) => {
    if (req.session.var_logging){
        const dato = {
            title: "True",
            layout: "./layout/notificacion.ejs"
        };
        res.render("./user/true.ejs", dato);
    } else {
        res.redirect("/");
    }
};
const vista_false = (req, res) => {
    if (req.session.var_logging == false){
        const dato = {
            title: "False",
            layout: "./layout/notificacion.ejs"
        };
        res.render("./user/false.ejs", dato);
    } else {
        res.redirect("/");
    }
};
const vista_Home = (req, res) => {
    if (req.session.var_logging) {
        const dato = {
            myImg_ : req.session.myImg,
            myColor : req.session.valor_dark,
            myID_ : req.session.myID_,
            Nombre_ : req.session.Nombre_,
            Tipo_ : req.session.Tipo_,
            title: "Home",
            layout: "./layout/hoja.ejs"
        };
        res.render("./view/2_Home.ejs", dato);   
    } else {
        res.redirect("/");
    }
};
const vista_DashBoard = async(req, res) => {
    const mando = "SELECT pez, temperatura, pH_low, pH_up FROM vista_pez WHERE item = ?";
    await DBConnector.queryWithParams(mando, [1])
    .then((result) => {
        if (req.session.var_logging) {
            var datos = {
                myImg_: req.session.myImg,
                myColor: req.session.valor_dark,
                myID_: req.session.myID_,
                Nombre_: req.session.Nombre_,
                Tipo_: req.session.Tipo_,
                title: "DashBoard",
                layout: "./layout/hoja.ejs",
                pez: result[0].pez,
                temperatura: result[0].temperatura,
                pH_low: result[0].pH_low,
                pH_up: result[0].pH_up
            }; 
            res.render("./view/3_DashBoard.ejs", datos);
        } else {
            res.redirect("/");
        }
    });
};
const vista_Configuracion = async(req, res) => {
    const mando = "SELECT * FROM peristaltica";
    await DBConnector.query(mando)
    .then((result) => {
        if (req.session.var_logging) {
            var datos = {
                myImg_: req.session.myImg,
                myColor: req.session.valor_dark,
                myID_: req.session.myID_,
                Nombre_: req.session.Nombre_,
                Tipo_: req.session.Tipo_,
                title: "Configuración",
                layout: "./layout/hoja.ejs",
                //Enable_: result[0].Enable
                
                /*
                OnOff: result[0].on_off_temp,
                Kp: result[0].kp,
                Ki: result[0].ki,
                Kd: result[0].kd,
                OnOffLum: result[0].on_off_lum,
                OnOffBom: result[0].on_off_bom,
                Pez: result[0].pez,
                Temperatura: result[0].temperatura,
                pH_L: result[0].pH_low,
                pH_U: result[0].pH_up,
                Luminocidad: result[0].luminocidad*/
            };
            console.log(result[0]);
            res.render("./view/4_Configuracion.ejs", datos);
        } else {
            res.redirect("/");
        }
    });
};
const vista_Ayuda = async(req, res) => {
    if (req.session.var_logging) {
        var datos = {
            myImg_: req.session.myImg,
            myColor: req.session.valor_dark,
            myID_: req.session.myID_,
            Nombre_: req.session.Nombre_,
            Tipo_: req.session.Tipo_,
            title: "Ayuda",
            layout: "./layout/hoja.ejs"
        };
        res.render("./view/5_Ayuda.ejs", datos);
    } else {
        res.redirect("/");
    }
};
const Out = (req, res) => {
    if (req.session.var_logging) {
        req.session.Nombre_ = "";
        req.session.Tipo_ = "";
        req.session.var_logging = false;
        req.session.save();
        res.redirect("/");
    } else {
        res.redirect("/");
    }
};

module.exports = {
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
};