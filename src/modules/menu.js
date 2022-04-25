const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    //const closeBtn = menu.querySelector('.close-btn');
    //const menuItems = menu.querySelectorAll('ul>li>a');
    const anchorLinks = menu.querySelectorAll('a[href^="#"]');

    const toggleMenu = () => {
        menu.classList.toggle('active-menu');
    };


    menuBtn.addEventListener('click', toggleMenu);

    menu.addEventListener('click', (e) => {

        anchorLinks.forEach(item => {
            let attribute = e.target.getAttribute('href');
            if (item.classList.contains('close-btn')) {
                attribute = e.target.getAttribute('href');
                e.preventDefault();
                toggleMenu();
                console.log(attribute);
            } else if (attribute !== '#close') {
                e.preventDefault();
                attribute = e.target.getAttribute('href');

                document.querySelector(`${attribute}`).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
export default menu;

//event.target.closest('.ative-menu') && event.target.closest('.popup')