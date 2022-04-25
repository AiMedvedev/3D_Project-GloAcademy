const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    let count = 0,
        idInterval;

    if (mediaQuery.matches) {

        const animatePopup = () => {
            count += 2;
            idInterval = requestAnimationFrame(animatePopup);

            modal.style.display = 'block';
            if (count < 100) {
                modal.style.opacity = count + '%';
            } else {
                cancelAnimationFrame(idInterval);
            }
        };

        const unPop = () => {
            count -= 2;
            idInterval = requestAnimationFrame(unPop);

            if (count > 0) {
                modal.style.opacity = count + '%';
            } else {
                cancelAnimationFrame(idInterval);
                modal.style.display = 'none';
            }
        };

        buttons.forEach(btn => {
            btn.addEventListener('click', animatePopup);
        });

        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                unPop();
            }
        });

    } else {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });

        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                modal.style.display = 'none';
            }
        });
    }
};

export default modal;