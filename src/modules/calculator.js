import { animate } from './helpers';

const calc = (price = 100) => {

    // Калькулятор расчета.

    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');
    
    const countCalc = () => {

        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    
                    total.textContent = +total.textContent + Math.floor(progress * (totalValue - total.textContent));
                }
            });
            
        } else {
            totalValue = 0;
        }

        total.textContent = totalValue;
    }

    calcBlock.addEventListener('change', (e) => {
        if ((e.target === calcType) || (e.target === calcSquare) ||
            (e.target === calcCount) || (e.target === calcDay)) {
            countCalc();
        }
    });

    // Проверки на ввод.

    const calcInputs = document.querySelectorAll('input.calc-item');
    const textInputs = document.querySelectorAll('input[Placeholder="Ваше имя"]');
    const textArea = document.querySelector('input[Placeholder="Ваше сообщение"]');
    const emailInputs = document.querySelectorAll('input[Type="email"]');
    const telInputs = document.querySelectorAll('input[Type="tel"]');


    calcInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/g, "");
        })
    });

    textInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, "");
        })
    });

    textArea.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, "");
    });

    emailInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9a-zA-Z@-_.!~*']/g, "");
        })
    });

    telInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9()-]/g, "");
        })
    });

    textInputs.forEach(item => {
        item.onblur = function (e) {
            e.target.value = e.target.value.replace(/-{2,}/g, "-");
            e.target.value = e.target.value.replace(/ {2,}/g, " ");
            e.target.value = e.target.value.replace(/^[ -]*/g, "");
            e.target.value = e.target.value.replace(/[- ]?[ -]*$/g, "");
            e.target.value = e.target.value.replace(/(-| |^)[а-яёa-z]/g, ($1) => {
                return `${$1.toUpperCase()}`;
            });
        };
    });
}

export default calc;