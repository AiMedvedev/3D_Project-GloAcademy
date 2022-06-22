export const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется.';
    
    const validate = list => {
        let success = true;
        
        return success;
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};
        const emojis = ["🕐", "🕜", "🕑","🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢",  "🕗", "🕣", "🕘", "🕤", "🕙",  "🕥", "🕚", "🕦",  "🕛", "🕧"];
        const interval = 125;
        let intervalId;

        const loadEmojis = (arr) => {
            intervalId = setInterval(() => {
                statusBlock.innerText = arr[Math.floor(Math.random() * arr.length)];
            }, interval);
        }

        const stopLoading = () => {
            clearInterval(intervalId);
            intervalId = null;
          }
        
        form.classList.add('preload');
        statusBlock.classList.add('emoji');
        form.append(statusBlock);

        formData.forEach((value, key) => {
            formBody[key] = value;
        });
        
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            loadEmojis(emojis);
            sendData(formBody)
            .then(data => {
                stopLoading();
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    input.value = '';
                });
                setTimeout(() => {statusBlock.textContent = ''}, 5000);
            })
            .catch(error => statusBlock.textContent = errorText);
        } else {
            alert('Данные не валидны');
        }        
    }
    
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
    }

    if (formId === 'form3') {
        statusBlock.style.color = 'white';
    }

    try {
        if (!form) {
            throw new Error('Верните форму на местоб пожалуйста!')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            submitForm();
        })
    } catch (error) {
        console.log(error.message)
    }
}