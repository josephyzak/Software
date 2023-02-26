axios.get("/api/update/peristaltica/all")
.then((result) => {
    newSelected(result.data[0].ID, result.data[0].tipoPaso - 1, result.data[0].sentido);
    newSelected(result.data[1].ID, result.data[1].tipoPaso - 1, result.data[1].sentido);
    newSelected(result.data[2].ID, result.data[2].tipoPaso - 1, result.data[2].sentido);
    newSelected(result.data[3].ID, result.data[3].tipoPaso - 1, result.data[3].sentido);
    newSelected(result.data[4].ID, result.data[4].tipoPaso - 1, result.data[4].sentido);
});
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
function showContentBox(index) {
    check = document.getElementById("check_2_" + String(index));
    _Pasos = document.getElementById("Pasos_" + String(index));
    _Ejecutar = document.getElementById("Ejecutar_" + String(index));
    if (check.checked) {
        _Pasos.disabled = false;
        _Ejecutar.disabled = false;
    }
    else {
        _Pasos.disabled = true;
        _Ejecutar.disabled = true;
    }
}
async function Guardar(index) {
    check = document.getElementById("check_" + String(index));
    pasos = document.getElementById("microPaso_" + String(index)).value;
    sentido = sentido = document.getElementById("Sentido_" + String(index)).value;
    axios.post("/api/upgrate/peristaltica/" + String(index) + "/" + pasos + "/" + sentido)
    .then(() => {
        check.checked = false;
        showContent(index);
    });
}
function Reset(index) {
    check = document.getElementById("check_" + String(index));
    axios.post("/api/upgrate/peristaltica/" + String(index) + "/1/0")
    .then(() => {
        check.checked = false;
        showContent(index);
    });
}
function Ejecutar(index) {
    check = document.getElementById("check_2_" + String(index));
    texto = document.getElementById("Pasos_" + String(index)).value;
    
    check.disabled = true;
    check.checked = false;
    showContentBox(index);
    axios.post("/api/parpadea/" + texto)
    .then(() => {
        check.disabled = false;
    });
}

function newSelected(index, _option, _sentido) {
    document.getElementById("microPaso_" + String(index)).options[_option].selected = "selected";
    document.getElementById("Sentido_" + String(index)).options[_sentido].selected = "selected";
};
