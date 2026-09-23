```javascript
function calcularDistancia() {

    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);

    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);

    if (
        document.getElementById("x1").value === "" ||
        document.getElementById("y1").value === "" ||
        document.getElementById("x2").value === "" ||
        document.getElementById("y2").value === ""
    ) {
        document.getElementById("resultado").innerHTML =
            "⚠️ Preencha todas as coordenadas.";

        return;
    }

    let distancia = Math.sqrt(
        Math.pow(x2 - x1, 2) +
        Math.pow(y2 - y1, 2)
    );

    distancia = distancia.toFixed(2);

    document.getElementById("resultado").innerHTML =
        `📏 A distância entre A(${x1}, ${y1}) e B(${x2}, ${y2}) é: <strong>${distancia}</strong>`;
}
```
