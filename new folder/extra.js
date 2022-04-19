const input = document.querySelector('.text');
const paragraph = document.querySelector('.second');


const typing = function() {
    setTimeout(() => {
        paragraph.innerHTML = input.value;
    }, 300);
};

function debounce(callback, delay) {
    let timeoutId = typing();
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(callback, delay);
    };
}

input.addEventListener('input', debounce(typing, 300));
