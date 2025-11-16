function calcular() {
    let saldoInicial = parseFloat(document.getElementById("saldo").value);
    let pagoMensual = parseFloat(document.getElementById("pago").value);
    let pagoQuincenal = pagoMensual / 2;

    const tasaInteresAnual = 0.24;
    const tasaInteresDiaria = tasaInteresAnual / 365;
    const diasQuincena = 15;

    const seguroQuincenal = 3.96 / 2;

    let saldo = saldoInicial;
    let totalPagado = 0;
    let intereses = 0;
    let seguros = 0;
    let quincenas = 0;

    while (saldo > 0) {
        saldo += seguroQuincenal;
        seguros += seguroQuincenal;

        let interes = saldo * tasaInteresDiaria * diasQuincena;
        intereses += interes;

        let pago = Math.min(pagoQuincenal, saldo + interes);

        saldo += interes - pago;
        totalPagado += pago;
        quincenas++;
    }

    let meses = quincenas / 2;

    document.getElementById("resultado").innerHTML = `
        <h2>Resultado</h2>
        <p><strong>Tiempo total:</strong> ${quincenas} quincenas (${meses.toFixed(1)} meses)</p>
        <p><strong>Total pagado:</strong> $${totalPagado.toFixed(2)}</p>
        <p><strong>Intereses totales:</strong> $${intereses.toFixed(2)}</p>
        <p><strong>Seguros totales:</strong> $${seguros.toFixed(2)}</p>
    `;
}
