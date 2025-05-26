const slides = document.querySelectorAll('.itemcarrusel');
const totalSlides = slides.length;
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(nextSlide, 4000);

    
    document.querySelectorAll('.flechascarrusel a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (link.href.includes('left')) {
                prevSlide();
            } else {
                nextSlide();
            }
        });
    });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    const sugerenciasGuardadas = JSON.parse(localStorage.getItem('sugerencias')) || [];

    sugerenciasGuardadas.push({ nombre, email, mensaje });

    localStorage.setItem('sugerencias', JSON.stringify(sugerenciasGuardadas));

    alert('¡Gracias por tu sugerencia! Ha sido guardada.');
    
    this.reset();
});
