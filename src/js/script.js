function Calcular(operacao) 
{
    let n1 = document.getElementById("val1").value;
    let n2 = document.getElementById("val2").value;
    var result;

    if (isNaN(n1) || n1 === "") {
        alert("Primeiro valor inválido");
        document.getElementById("val1").value = "";
        document.getElementById("val1").focus();
    }
    else if(isNaN(n2) || n2 === "") {
        alert("Segundo valor inválido");
        document.getElementById("val2").value = "";
        document.getElementById("val2").focus();
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
                document.getElementById("val2").value = "";
                document.getElementById("val2").focus();
                return;
            }
            else {
                result = n1 / n2;
            } 
        }
        else if(operacao == "+") {
            result = n1 + n2;
        }
        else {
            result = n1 - n2;
        }
        document.getElementById("result").value = result.toFixed(2);
    }
}