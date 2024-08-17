document.addEventListener('DOMContentLoaded', function() {
    // Adicione aqui qualquer interatividade com JavaScript
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".carousel-container img");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

function nextSlide() {
    let slides = document.querySelectorAll(".carousel-container img");
    slides[slideIndex - 1].style.display = "none";
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

function prevSlide() {
    let slides = document.querySelectorAll(".carousel-container img");
    slides[slideIndex - 1].style.display = "none";
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
}
