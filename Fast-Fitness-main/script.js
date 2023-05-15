let $calcular = document.getElementById("calcular");

function imc(){
    let $altura = document.getElementById("altura").value;
    let $peso = document.getElementById("peso").value;
    let $resultado = document.getElementById("resultado");

    if($altura != '' && $peso != ''){
        $altura = $altura.replace(",",".");
        $peso = $peso.replace(",",".");

        $altura = parseFloat($altura);
        $peso = parseFloat($peso);

        let calcIMC = ($peso / ($altura * $altura)).toFixed(1);

        let $classificacao = "";

        if(calcIMC < 18.5){
            $classificacao = "Abaixo do peso";
        }
        else if(calcIMC < 25){
            $classificacao = "Peso ideal, parabéns !!!";
        }
        else if(calcIMC < 30){
            $classificacao = "Acima do peso";
        }
        else if(calcIMC < 35){
            $classificacao = "Obesidade grau 1";
        }
        else if(calcIMC < 40){
            $classificacao = "Obesidade grau 2";
        }
        else{
            $classificacao = "Obesidade grau 3";
        }

        $resultado.textContent = `Seu imc é ${calcIMC}, você está ${$classificacao}`;
    }
    else if($altura != '' && $peso == ''){
        $resultado.textContent = "Obrigatório preencher o seu peso !!";
        document.getElementById("peso").focus();
    }
    else if($altura == '' && $peso != ''){
        $resultado.textContent = "Obrigatório preencher a sua altura !!";
        document.getElementById("altura").focus();
    }
    else{
        $resultado.textContent = "Obrigatório preencher todos os campos !!";
        document.getElementById("peso").focus();
    }
}

$calcular.addEventListener("click", imc);