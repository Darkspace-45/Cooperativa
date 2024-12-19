const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');

carouselInner.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('carousel-item')) {
        const activeItem = carouselInner.querySelector('.carousel-item.active');
        const activeIndex = Array.prototype.indexOf.call(carouselInner.children, activeItem);
        const nextItem = carouselInner.children[activeIndex + 1];
        const prevItem = carouselInner.children[activeIndex - 1];

        if (nextItem) {
            nextItem.classList.add('active');
            activeItem.classList.remove('active');
        } else if (prevItem) {
            prevItem.classList.add('active');
            activeItem.classList.remove('active');
        }
    }
});