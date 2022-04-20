const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    let count = 0,
        idInterval;

    if (mediaQuery.matches) {

        const animatePopup = () => {
            count++;
            idInterval = requestAnimationFrame(animatePopup);

            modal.style.display = 'block';
            if (count < 100) {
                modal.style.opacity = count + '%';
            } else {
                cancelAnimationFrame(idInterval);
            }
        };

        const unPop = () => {
            count--;
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

        closeBtn.addEventListener('click', unPop);

    } else {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
};

export default modal;