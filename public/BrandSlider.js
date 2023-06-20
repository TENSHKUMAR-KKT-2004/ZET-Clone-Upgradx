function slideBrands() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const brands = document.querySelectorAll('.brand-item');
    const brandWidth = brands[0].offsetWidth;
    let currentIndex = 0;
  
    function animateSlide() {
      currentIndex++;
      swiperWrapper.style.transition = 'transform 1s';
      swiperWrapper.style.transform = `translateX(-${currentIndex * 200}px)`;
  
      if (currentIndex+2 >= brands.length) {
        currentIndex = 0;
        setTimeout(() => {
          swiperWrapper.style.transition = 'none';
          swiperWrapper.style.transform = `translateX(0)`;
          setTimeout(() => {
            swiperWrapper.style.transition = 'transform 1s';
            slideBrands();
          }, 0);
        }, 1000);
      } else {
        setTimeout(animateSlide, 2000);
      }
    }
  
    setTimeout(animateSlide, 2000);
  }
  
  slideBrands();
  