const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            
            //modal.classList.add('popup-content');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        //modal.classList.remove('popup-content');
    });

};

export default modal;