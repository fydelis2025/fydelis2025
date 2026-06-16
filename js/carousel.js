const slides = document.querySelector('.slides');

let current = 0;

function nextSlide(){

    current++;

    if(current > 2){
        current = 0;
    }

    slides.style.transform =
    `translateX(-${current * 33.333}%)`;

}

setInterval(nextSlide,5000);
