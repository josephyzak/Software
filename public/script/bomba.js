function showContent(index) {
    my_select = document.getElementById("microPaso_" + String(index));
    sentido = document.getElementById("Sentido_" + String(index));
    check = document.getElementById("check_" + String(index));
    _Guardar = document.getElementById("Guardar_" + String(index));
    _Reset = document.getElementById("Reset_" + String(index));
    if (check.checked) {
        my_select.disabled = false;
        sentido.disabled = false;
        _Guardar.disabled = false;
        _Reset.disabled = false;
    }
    else {
        my_select.disabled = true;
        sentido.disabled = true;
        _Guardar.disabled = true;
        _Reset.disabled = true;
    }
}
function Guardar() {
    console.log("Guardaer");
}
function Reset() {
    console.log("Reset");
}