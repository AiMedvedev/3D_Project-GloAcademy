import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothScroll from './modules/scroll';
import calculator from './modules/calculator';
import tabs from './modules/tabs';
import slider from './modules/slider';

const indexJs = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dotList = document.querySelector('.portfolio-dots');
    
    
    
    return sliderBlock, slides, dotList
}

export default indexJs;
    
timer('30 april 2022');
menu();
modal();
smoothScroll();
calculator();
tabs();
slider();
