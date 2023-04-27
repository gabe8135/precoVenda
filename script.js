function calcular() {
    var precoUnitario = parseFloat(document.getElementById("precoUnitario").value);
    var precoFrete = parseFloat(document.getElementById("precoFrete").value);
    var quantiaUnidades = parseFloat(document.getElementById("quantiaUnidades").value);
    var porcentagemAdicional = parseFloat(document.getElementById("porcentagemAdicional").value);
    var precoVenda = document.getElementById("precoVenda");
    var lucroTotal = document.getElementById("lucroTotal");

    var valorTotal = precoUnitario * quantiaUnidades + precoFrete;
    var valorFinal = valorTotal * (1 + porcentagemAdicional / 100) / quantiaUnidades;

    precoVenda.value = "R$ " + valorFinal.toFixed(2).replace(".", ",");
    lucroTotal.value = "R$ " + (valorFinal - precoUnitario).toFixed(2).replace(".", ",");
}

function limpar() {
    document.getElementById("precoUnitario").value = "";
    document.getElementById("precoFrete").value = "";
    document.getElementById("quantiaUnidades").value = "";
    document.getElementById("porcentagemAdicional").value = "";
    document.getElementById("precoVenda").value = "";
    document.getElementById("lucroTotal").value = "";
}