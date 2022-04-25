const smoothScroll = () => {
    
const services = document.querySelector('.service .container');
const nextBtn = document.querySelector('main>a>img');

    nextBtn.addEventListener('click', (event) => {
        event.preventDefault();
        services.scrollIntoView({
            behavior: "smooth"
        });
    });
};

smoothScroll();


export default smoothScroll;