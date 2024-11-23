let lastScrollPosition = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition;
});

const modal = document.getElementById("trailerModal");
const btn = document.getElementById("watchTrailerBtn");
const closeBtn = document.getElementById("closeModal");

btn.addEventListener('click', () => {
    modal.style.display = "flex"; 
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none"; 
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === "flex") {
        modal.style.display = "none";
    }
});
