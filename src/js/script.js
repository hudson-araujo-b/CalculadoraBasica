function Calcular(operacao) 
{
    let n1 = document.getElementById("val1").value;
    let n2 = document.getElementById("val2").value;
    let result = 0;

    if (isNaN(n1) || isNaN(n2) || n1 == "" || n2 == "") {
        alert("Valores inválidos");

    }
    else {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        if(operacao == "x") {
            result = n1 * n2;
        }
        else if(operacao == "%") {
            if(n2 == 0) {
                alert("O segundo elemento não pode ser 0 em divisões");
            }
            else {
                result = n1 / n2;
            }
            
        }
        else if(operacao == "+") {
            result = n1 + n2;
        }
        else if(operacao == "-"){
            result = n1 - n2;
        }
        else {
            alert("O tipo de operação não foi informado");

        }
    }
    document.getElementById("result").value = result.toFixed(2);
}