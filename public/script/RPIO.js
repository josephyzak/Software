var rpio = require("rpio");
rpio.init({mapping: "physical", gpiomem: false, close_on_exit: false});

const pin1 = [10,11,12];

rpio.open(pin1[0], rpio.OUTPUT, rpio.LOW);

const writePIN = function (pin, data) {
    if(data == "LOW"){
        rpio.write(pin1[pin], rpio.LOW);
    } else if (data == "HIGH"){
        rpio.write(pin1[pin], rpio.HIGH);
    }
};
const dormir = function(tiempo){
    rpio.sleep(tiempo);
};
const SIGTERM = process.on('SIGTERM', function(){
    rpio.close(pin1[0], rpio.PIN_RESET);
    process.exit(0);
});
const SIGINT = process.on('SIGINT', function(){
    rpio.close(pin1[0], rpio.PIN_RESET);
    process.exit(0);
});
const salida = process.on('exit', function(){
    rpio.close(pin1[0], rpio.PIN_RESET);
    console.log(" Apagando, realizando limpieza de GPIO");
    rpio.spiEnd();
    process.exit(0);
});

module.exports = {
    writePIN,
    dormir,
    SIGINT,
    SIGTERM,
    salida
};