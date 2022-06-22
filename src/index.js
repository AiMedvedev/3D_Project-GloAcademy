import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothScroll from './modules/scroll';
import calc from './modules/calculator';
import tabs from './modules/tabs';
import {Slider} from './modules/slider';
import {swiper} from './modules/swiper';
import {sendForm} from './modules/sendForm';


timer('18 july 2022');
menu();
modal();
smoothScroll();
calc(100);
tabs();
swiper();
sendForm({formId: 'form1', someElem: [
    {
        type: 'block',
        id: 'total'
    }
]});
sendForm({formId: 'form2', someElem: [
    {
        type: 'block',
        id: 'total'
    }
]});
sendForm({formId: 'form3', someElem: [
    {
        type: 'block',
        id: 'total'
    }
]});

const portfolioSlider = new Slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
portfolioSlider.sliderFunc();
