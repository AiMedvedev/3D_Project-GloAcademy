const calculator = () => {

    const calcInputs = document.querySelectorAll('input.calc-item');
    const textInputs = document.querySelectorAll('input[Placeholder="Ваше имя"]');
    const textArea = document.querySelector('input[Placeholder="Ваше сообщение"]');
    const emailInputs = document.querySelectorAll('input[Type="email"]');
    const telInputs = document.querySelectorAll('input[Type="tel"]');

    
    // 1.
    calcInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/g, "");
        })
    });
    // 2.1.
    textInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, "");
        })
    });

    textArea.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, "");
    });
    // 2.2.
    emailInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9a-zA-Z@-_.!~*']/g, "");
        })
    });
    // 2.3.
    telInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9()-]/g, "");
        })
    });

    // 3.2.

    textInputs.forEach(item => {
        item.onblur = function(e) {
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

export default calculator;

