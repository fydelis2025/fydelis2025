const elements =
document.querySelectorAll(
'.card,.projeto,.grid div'
);

function reveal() {

    elements.forEach(el => {

        const windowHeight =
            window.innerHeight;

        const top =
            el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.classList.add('active');

        }

    });

}

window.addEventListener('scroll', reveal);

reveal();
