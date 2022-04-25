const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    //const closeBtn = menu.querySelector('.close-btn');
    //const menuItems = menu.querySelectorAll('ul>li>a');
    const anchorLinks = menu.querySelectorAll('a[href^="#"]');

    const toggleMenu = () => {
        menu.classList.toggle('active-menu');
    };


    document.addEventListener('click', (e) => {
        
        if (!e.target.closest('.menu') && !menu.classList.contains('active-menu')) {
            toggleMenu()
        } 

        if (e.target.closest('.menu-content') && e.target.hasAttribute('href')) {
            anchorLinks.forEach(item => {
                let attribute = e.target.getAttribute('href');
                if (item.classList.contains('close-btn')) {
                    e.preventDefault();
                    toggleMenu();
                } else if (attribute !== '#close') {
                    e.preventDefault();
                    document.querySelector(`${attribute}`).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
        
        if (!e.target.classList.contains('active-menu') && !e.target.closest('.menu-content')) {
            toggleMenu();
        }

    });
}
export default menu;