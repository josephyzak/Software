async function enviarSPI() {
    led1A = document.getElementById("led1A");
    led1B = document.getElementById("led1B");
    led1C = document.getElementById("led1C");
    led1D = document.getElementById("led1D");
    led1E = document.getElementById("led1E");
    led1F = document.getElementById("led1F");
    led1G = document.getElementById("led1G");
    led1H = document.getElementById("led1H");

    led2A = document.getElementById("led2A");
    led2B = document.getElementById("led2B");
    led2C = document.getElementById("led2C");
    led2D = document.getElementById("led2D");
    led2E = document.getElementById("led2E");
    led2F = document.getElementById("led2F");
    led2G = document.getElementById("led2G");
    led2H = document.getElementById("led2H");

    led3A = document.getElementById("led3A");
    led3B = document.getElementById("led3B");
    led3C = document.getElementById("led3C");
    led3D = document.getElementById("led3D");
    led3E = document.getElementById("led3E");
    led3F = document.getElementById("led3F");
    led3G = document.getElementById("led3G");
    led3H = document.getElementById("led3H");

    led4A = document.getElementById("led4A");
    led4B = document.getElementById("led4B");
    led4C = document.getElementById("led4C");
    led4D = document.getElementById("led4D");
    led4E = document.getElementById("led4E");
    led4F = document.getElementById("led4F");
    led4G = document.getElementById("led4G");
    led4H = document.getElementById("led4H");

    led5A = document.getElementById("led5A");
    led5B = document.getElementById("led5B");
    led5C = document.getElementById("led5C");
    led5D = document.getElementById("led5D");
    led5E = document.getElementById("led5E");
    led5F = document.getElementById("led5F");
    led5G = document.getElementById("led5G");
    led5H = document.getElementById("led5H");

    led6A = document.getElementById("led6A");
    led6B = document.getElementById("led6B");
    led6C = document.getElementById("led6C");
    led6D = document.getElementById("led6D");
    led6E = document.getElementById("led6E");
    led6F = document.getElementById("led6F");
    led6G = document.getElementById("led6G");
    led6H = document.getElementById("led6H");

    led7A = document.getElementById("led7A");
    led7B = document.getElementById("led7B");
    led7C = document.getElementById("led7C");
    led7D = document.getElementById("led7D");
    led7E = document.getElementById("led7E");
    led7F = document.getElementById("led7F");
    led7G = document.getElementById("led7G");
    led7H = document.getElementById("led7H");

    led8A = document.getElementById("led8A");
    led8B = document.getElementById("led8B");
    led8C = document.getElementById("led8C");
    led8D = document.getElementById("led8D");
    led8E = document.getElementById("led8E");
    led8F = document.getElementById("led8F");
    led8G = document.getElementById("led8G");
    led8H = document.getElementById("led8H");

    val_led1 = 0b00000000;
    val_led2 = 0b00000000;
    val_led3 = 0b00000000;
    val_led4 = 0b00000000;
    val_led5 = 0b00000000;
    val_led6 = 0b00000000;
    val_led7 = 0b00000000;
    val_led8 = 0b00000000;

    if (led1A.checked) {val_led1 = val_led1 | 0b10000000;} else {val_led1 = val_led1 & 0b01111111;}
    if (led1B.checked) {val_led1 = val_led1 | 0b01000000;} else {val_led1 = val_led1 & 0b10111111;}
    if (led1C.checked) {val_led1 = val_led1 | 0b00100000;} else {val_led1 = val_led1 & 0b11011111;}
    if (led1D.checked) {val_led1 = val_led1 | 0b00010000;} else {val_led1 = val_led1 & 0b11101111;}
    if (led1E.checked) {val_led1 = val_led1 | 0b00001000;} else {val_led1 = val_led1 & 0b11110111;}
    if (led1F.checked) {val_led1 = val_led1 | 0b00000100;} else {val_led1 = val_led1 & 0b11111011;}
    if (led1G.checked) {val_led1 = val_led1 | 0b00000010;} else {val_led1 = val_led1 & 0b11111101;}
    if (led1H.checked) {val_led1 = val_led1 | 0b00000001;} else {val_led1 = val_led1 & 0b11111110;}

    if (led2A.checked) {val_led2 = val_led2 | 0b10000000;} else {val_led2 = val_led2 & 0b01111111;}
    if (led2B.checked) {val_led2 = val_led2 | 0b01000000;} else {val_led2 = val_led2 & 0b10111111;}
    if (led2C.checked) {val_led2 = val_led2 | 0b00100000;} else {val_led2 = val_led2 & 0b11011111;}
    if (led2D.checked) {val_led2 = val_led2 | 0b00010000;} else {val_led2 = val_led2 & 0b11101111;}
    if (led2E.checked) {val_led2 = val_led2 | 0b00001000;} else {val_led2 = val_led2 & 0b11110111;}
    if (led2F.checked) {val_led2 = val_led2 | 0b00000100;} else {val_led2 = val_led2 & 0b11111011;}
    if (led2G.checked) {val_led2 = val_led2 | 0b00000010;} else {val_led2 = val_led2 & 0b11111101;}
    if (led2H.checked) {val_led2 = val_led2 | 0b00000001;} else {val_led2 = val_led2 & 0b11111110;}

    if (led3A.checked) {val_led3 = val_led3 | 0b10000000;} else {val_led3 = val_led3 & 0b01111111;}
    if (led3B.checked) {val_led3 = val_led3 | 0b01000000;} else {val_led3 = val_led3 & 0b10111111;}
    if (led3C.checked) {val_led3 = val_led3 | 0b00100000;} else {val_led3 = val_led3 & 0b11011111;}
    if (led3D.checked) {val_led3 = val_led3 | 0b00010000;} else {val_led3 = val_led3 & 0b11101111;}
    if (led3E.checked) {val_led3 = val_led3 | 0b00001000;} else {val_led3 = val_led3 & 0b11110111;}
    if (led3F.checked) {val_led3 = val_led3 | 0b00000100;} else {val_led3 = val_led3 & 0b11111011;}
    if (led3G.checked) {val_led3 = val_led3 | 0b00000010;} else {val_led3 = val_led3 & 0b11111101;}
    if (led3H.checked) {val_led3 = val_led3 | 0b00000001;} else {val_led3 = val_led3 & 0b11111110;}

    if (led4A.checked) {val_led4 = val_led4 | 0b10000000;} else {val_led4 = val_led4 & 0b01111111;}
    if (led4B.checked) {val_led4 = val_led4 | 0b01000000;} else {val_led4 = val_led4 & 0b10111111;}
    if (led4C.checked) {val_led4 = val_led4 | 0b00100000;} else {val_led4 = val_led4 & 0b11011111;}
    if (led4D.checked) {val_led4 = val_led4 | 0b00010000;} else {val_led4 = val_led4 & 0b11101111;}
    if (led4E.checked) {val_led4 = val_led4 | 0b00001000;} else {val_led4 = val_led4 & 0b11110111;}
    if (led4F.checked) {val_led4 = val_led4 | 0b00000100;} else {val_led4 = val_led4 & 0b11111011;}
    if (led4G.checked) {val_led4 = val_led4 | 0b00000010;} else {val_led4 = val_led4 & 0b11111101;}
    if (led4H.checked) {val_led4 = val_led4 | 0b00000001;} else {val_led4 = val_led4 & 0b11111110;}

    if (led5A.checked) {val_led5 = val_led5 | 0b10000000;} else {val_led5 = val_led5 & 0b01111111;}
    if (led5B.checked) {val_led5 = val_led5 | 0b01000000;} else {val_led5 = val_led5 & 0b10111111;}
    if (led5C.checked) {val_led5 = val_led5 | 0b00100000;} else {val_led5 = val_led5 & 0b11011111;}
    if (led5D.checked) {val_led5 = val_led5 | 0b00010000;} else {val_led5 = val_led5 & 0b11101111;}
    if (led5E.checked) {val_led5 = val_led5 | 0b00001000;} else {val_led5 = val_led5 & 0b11110111;}
    if (led5F.checked) {val_led5 = val_led5 | 0b00000100;} else {val_led5 = val_led5 & 0b11111011;}
    if (led5G.checked) {val_led5 = val_led5 | 0b00000010;} else {val_led5 = val_led5 & 0b11111101;}
    if (led5H.checked) {val_led5 = val_led5 | 0b00000001;} else {val_led5 = val_led5 & 0b11111110;}

    if (led6A.checked) {val_led6 = val_led6 | 0b10000000;} else {val_led6 = val_led6 & 0b01111111;}
    if (led6B.checked) {val_led6 = val_led6 | 0b01000000;} else {val_led6 = val_led6 & 0b10111111;}
    if (led6C.checked) {val_led6 = val_led6 | 0b00100000;} else {val_led6 = val_led6 & 0b11011111;}
    if (led6D.checked) {val_led6 = val_led6 | 0b00010000;} else {val_led6 = val_led6 & 0b11101111;}
    if (led6E.checked) {val_led6 = val_led6 | 0b00001000;} else {val_led6 = val_led6 & 0b11110111;}
    if (led6F.checked) {val_led6 = val_led6 | 0b00000100;} else {val_led6 = val_led6 & 0b11111011;}
    if (led6G.checked) {val_led6 = val_led6 | 0b00000010;} else {val_led6 = val_led6 & 0b11111101;}
    if (led6H.checked) {val_led6 = val_led6 | 0b00000001;} else {val_led6 = val_led6 & 0b11111110;}

    if (led7A.checked) {val_led7 = val_led7 | 0b10000000;} else {val_led7 = val_led7 & 0b01111111;}
    if (led7B.checked) {val_led7 = val_led7 | 0b01000000;} else {val_led7 = val_led7 & 0b10111111;}
    if (led7C.checked) {val_led7 = val_led7 | 0b00100000;} else {val_led7 = val_led7 & 0b11011111;}
    if (led7D.checked) {val_led7 = val_led7 | 0b00010000;} else {val_led7 = val_led7 & 0b11101111;}
    if (led7E.checked) {val_led7 = val_led7 | 0b00001000;} else {val_led7 = val_led7 & 0b11110111;}
    if (led7F.checked) {val_led7 = val_led7 | 0b00000100;} else {val_led7 = val_led7 & 0b11111011;}
    if (led7G.checked) {val_led7 = val_led7 | 0b00000010;} else {val_led7 = val_led7 & 0b11111101;}
    if (led7H.checked) {val_led7 = val_led7 | 0b00000001;} else {val_led7 = val_led7 & 0b11111110;}

    if (led8A.checked) {val_led8 = val_led8 | 0b10000000;} else {val_led8 = val_led8 & 0b01111111;}
    if (led8B.checked) {val_led8 = val_led8 | 0b01000000;} else {val_led8 = val_led8 & 0b10111111;}
    if (led8C.checked) {val_led8 = val_led8 | 0b00100000;} else {val_led8 = val_led8 & 0b11011111;}
    if (led8D.checked) {val_led8 = val_led8 | 0b00010000;} else {val_led8 = val_led8 & 0b11101111;}
    if (led8E.checked) {val_led8 = val_led8 | 0b00001000;} else {val_led8 = val_led8 & 0b11110111;}
    if (led8F.checked) {val_led8 = val_led8 | 0b00000100;} else {val_led8 = val_led8 & 0b11111011;}
    if (led8G.checked) {val_led8 = val_led8 | 0b00000010;} else {val_led8 = val_led8 & 0b11111101;}
    if (led8H.checked) {val_led8 = val_led8 | 0b00000001;} else {val_led8 = val_led8 & 0b11111110;}

    axios.post("/api/LED/" + String(val_led1) + "/" + String(val_led2) + "/" + String(val_led3) + "/" + String(val_led4) + "/" + String(val_led5) + "/" + String(val_led6) + "/" + String(val_led7) + "/" + String(val_led8))
    .then(() => {
        console.log("enviado...");
    });
}