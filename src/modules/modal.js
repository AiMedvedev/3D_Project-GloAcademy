import {
    animate
} from './helpers';

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    let count = 0;

    if (mediaQuery.matches) {

        buttons.forEach(btn => {
            btn.addEventListener('click', animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw() {
                    count += 2;

                    modal.style.display = 'block';
                    if (count < 100) {
                        modal.style.opacity = count + '%';
                    }
                }
            }));
        });

        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw() {
                        count -= 2;

                        if (count > 0) {
                            modal.style.opacity = count + '%';
                        } else {
                            modal.style.display = 'none';
                        }
                    }
                });;
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