const slides = document.querySelector('.slides');

if (slides) {

    const totalSlides =
        document.querySelectorAll('.slide').length;

    let current = 0;

    function nextSlide() {

        current++;

        if (current >= totalSlides) {
            current = 0;
        }

        slides.style.transform =
            `translateX(-${current * 100}%)`;

    }

    slides.style.transition = 'transform 0.8s ease';

    setInterval(nextSlide, 5000);

}
