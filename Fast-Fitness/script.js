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