let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}
// Auto-scroll functionality
let autoScrollInterval;

function startAutoScroll() {
    autoScrollInterval = setInterval(function () {
        plusSlides(1);
    }, 5000); // Adjust the interval (in milliseconds) as needed
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Touch swipe functionality
let touchStartX;

document.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    stopAutoScroll();
});

document.addEventListener('touchend', function (e) {
    let touchEndX = e.changedTouches[0].clientX;
    let swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {
        plusSlides(-1);
    } else if (swipeDistance < -50) {
        plusSlides(1);
    }

    startAutoScroll();
});

// Start auto-scroll on page load
startAutoScroll();