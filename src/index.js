import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothScroll from './modules/scroll';
import calc from './modules/calculator';
import tabs from './modules/tabs';
import {Slider} from './modules/slider';


timer('30 april 2022');
menu();
modal();
smoothScroll();
calc(100);
tabs();


const portfolioSlider = new Slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
portfolioSlider.sliderFunc();
