document.getElementById('calculoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener el valor del importe bruto
    let importeBruto = parseFloat(document.getElementById('importeBruto').value);
    let impuesto;
    let importeNeto;

    // Determinar el impuesto a aplicar
    if (importeBruto > 15000) {
        impuesto = 0.16;
    } else {
        impuesto = 0.10;
    }

    // Calcular el importe neto
    importeNeto = importeBruto - (importeBruto * impuesto);

    // Mostrar el resultado
    document.getElementById('resultado').textContent = `El importe neto es: $${importeNeto.toFixed(2)}`;
});
