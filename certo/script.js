let Slide = 0;
SlideShow();

function SlideShow() {
    let i;
    let slides = document.getElementsByClassName("imgSlide");
    let pontos = document.getElementsByClassName("ponto");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    Slide++;
    
    if (Slide > slides.length){
        Slide = 1
    }    
  
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" ativar", "");
    }

    slides[Slide-1].style.display = "block";  
    pontos[Slide-1].className += " ativar";
    setTimeout(SlideShow, 3000);
}

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