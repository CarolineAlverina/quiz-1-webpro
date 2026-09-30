document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
});

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const status = carousel.querySelector("[data-carousel-status]");
    const previousButton = carousel.querySelector("[data-carousel-previous]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const detailPanels = carousel.parentElement.querySelectorAll("[data-food-details]");
    const storySection = carousel.parentElement.nextElementSibling;
    const storyPanels = storySection ? storySection.querySelectorAll("[data-food-story]") : [];
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, slideIndex) => {
            slide.hidden = slideIndex !== index;
        });

        detailPanels.forEach((panel, panelIndex) => {
            panel.hidden = panelIndex !== index;
        });

        storyPanels.forEach((panel, panelIndex) => {
            panel.hidden = panelIndex !== index;
        });

        status.textContent = `${index + 1} from ${slides.length}`;
    }

    previousButton.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextButton.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});
