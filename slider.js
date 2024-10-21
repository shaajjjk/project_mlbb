const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const totalImages = images.length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
