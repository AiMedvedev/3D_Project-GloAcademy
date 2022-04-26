
class Slider {
    constructor (sliderBlockClass, slidesClass, dotListClass, activeSlideClass = 'portfolio-item-active', activeDotClass = 'dot-active', timeInterval = 2000) {
        this.sliderBlockClass = sliderBlockClass;
        this.slidesClass = slidesClass;
        this.dotListClass = dotListClass;
        this.activeSlideClass = activeSlideClass;
        this.activeDotClass = activeDotClass;
        this.timeInterval = timeInterval;
    }

    sliderFunc() {
        const sliderBlock = document.querySelector(this.sliderBlockClass);
        const slides = document.querySelectorAll(this.slidesClass);
        const dotList = document.querySelector(this.dotListClass);
    
        if (sliderBlock === null && slides.length === 0 && dotList === null) {
            return;
        } else if (sliderBlock === null || slides.length === 0 || dotList === null) {
            return;
        } else {
            let currentSlide = 0;
            let interval;
            let dots;
        
            slides.forEach(() => {
                let dot = document.createElement('li');
                
                dot.classList.add('dot');
                dotList.append(dot)
        
                return dotList;
            })
        
            dots = dotList.querySelectorAll('.dot');
            dots[currentSlide].classList.add(this.activeDotClass);
        
            const prevSlide = (elems, index, strClass) => {
                elems[index].classList.remove(strClass);
            }
            
            const nextSlide = (elems, index, strClass) => {
                elems[index].classList.add(strClass);
            }
        
            const autoSlide = () => {
                prevSlide(slides, currentSlide, this.activeSlideClass);
                prevSlide(dots, currentSlide, this.activeDotClass);
                currentSlide++;
        
                if (currentSlide >= slides.length) {
                    currentSlide = 0;
                }
                nextSlide(slides, currentSlide, this.activeSlideClass);
                nextSlide(dots, currentSlide, this.activeDotClass);
            }
        
            const startSlide = (timer = 4000) => {
                interval = setInterval(autoSlide, timer)
                
            }
            
            const stopSlide = () => {
                clearInterval(interval);
            }
        
            sliderBlock.addEventListener('click', (e) => {
                e.preventDefault();
        
                if (!e.target.matches('.dot, .portfolio-btn')) {
                    return;
                }
            
                prevSlide(slides, currentSlide, this.activeSlideClass);
                prevSlide(dots, currentSlide, this.activeDotClass);
        
                if (e.target.matches('#arrow-right')) {
                    currentSlide++;
                } else if (e.target.matches('#arrow-left')) {
                    currentSlide--;
                } else if (e.target.classList.contains('dot')) {
                    dots.forEach((dot, index) => {
                        if (e.target === dot) {
                            currentSlide = index;
                        }
                    });
                }
        
                if (currentSlide >= slides.length) {
                    currentSlide = 0;
                }
        
                if (currentSlide < 0) {
                    currentSlide = slides.length - 1;
                }
                nextSlide(slides, currentSlide, this.activeSlideClass);
                nextSlide(dots, currentSlide, this.activeDotClass);
            })
        
            sliderBlock.addEventListener('mouseenter', (e) => {
                if (e.target.matches('.dot, .portfolio-btn')) {
                    stopSlide();
                }
            }, true)
        
            sliderBlock.addEventListener('mouseleave', (e) => {
                if (e.target.matches('.dot, .portfolio-btn')) {
                    startSlide(this.timeInterval);
                }
            }, true)
        
            startSlide(this.timeInterval);
        }
    } 
}

export {Slider};