

// HOME PAGE


let video1 = document.getElementById('front-desk-video');

video1.addEventListener('mouseover', function() {
  video1.play();
});

video1.addEventListener('mouseout', function() {
  video1.pause();
});


const homePageCollageBtn = document.getElementById('open-close');

const homePageImgContainters = Array.from(document.querySelectorAll('.img-container'))
const homeIndex = 1;
const homeValue = homePageImgContainters[homeIndex]


function moveImgContainers(element, transformValue = 'none') {
   element.style.transition = "all 0.5s ease-in-out";
   element.style.transform = transformValue;
}

function changeBtnWidths(id, widthValue) {
   let btnWidths = document.getElementById(id);
   btnWidths.style.width = widthValue;
}

function activeImgContainer() {
   const images = homePageImgContainters;
   let activeImage = null;



   images.forEach((image) => {
      image.style.zIndex = '100';

      image.addEventListener('click', () => {
         if (activeImage) {
            activeImage.classList.remove('active');

         }
            moveImgContainers(homePageImgContainters[0], 'translate(-50vw, 36vw)');
            moveImgContainers(homePageImgContainters[1], 'translate(-38vw, 36vw)');
            moveImgContainers(homePageImgContainters[2], 'translate(-26vw, 36vw)');
            moveImgContainers(homePageImgContainters[3], 'translate(-14vw, 36vw)');
            moveImgContainers(homePageImgContainters[4], 'translate(-2vw, 36vw)');
         
         image.classList.add('active');
         activeImage = image;
         moveImgContainers(activeImage, 'translate(-50vw, -5vw)');
      });
   });
     const button = document.getElementById("open-close");
  button.addEventListener("click", () => {
    mouseoutToggle();
    expandImgIcons();
    if (activeImage !== null) {
      activeImage.classList.remove("active");
      activeImage = null;
    }
  });

}



let mouseoutEnabled = false

window.addEventListener('load', function() {
   mouseoutToggle();
});


function hidePicIconsMouseout() {
   moveImgContainers(homePageImgContainters[0], 'translate(0, 0)');
   moveImgContainers(homePageImgContainters[1], 'translate(0, 0)');
   moveImgContainers(homePageImgContainters[2], 'translate(0, 0)');
   moveImgContainers(homePageImgContainters[3], 'translate(0, 0)');
   moveImgContainers(homePageImgContainters[4], 'translate(0, 0)');
   changeBtnWidths('open-close', '90%')
   changeBtnWidths('close-btn', '10%')




// pictures

$('.image-slider').slick({

   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 3,
   centerMode: true,
   variableWidth: true

});





}
function showPicIconsMouseover() {
   moveImgContainers(homePageImgContainters[0], 'translate(20px, 20px)');
   moveImgContainers(homePageImgContainters[1], 'translate(40px, 40px)');
   moveImgContainers(homePageImgContainters[2], 'translate(60px, 60px)');
   moveImgContainers(homePageImgContainters[3], 'translate(80px, 80px)');
   moveImgContainers(homePageImgContainters[4], 'translate(100px, 100px)');
   changeBtnWidths('open-close', '80%');
   changeBtnWidths('close-btn', '20%')

}
function expandImgIcons() {
   moveImgContainers(homePageImgContainters[0], 'translate(0, -2vw)');
   moveImgContainers(homePageImgContainters[1], 'translate(12vw, 2vw)');
   moveImgContainers(homePageImgContainters[2], 'translate(0, 10vw)');
   moveImgContainers(homePageImgContainters[3], 'translate(12vw, 14vw)');
   moveImgContainers(homePageImgContainters[4], 'translate(0, 22vw)');
}

function mouseoutToggle() {
   mouseoutEnabled = !mouseoutEnabled;
   if (mouseoutEnabled) {
      homePageCollageBtn.addEventListener('mouseover', showPicIconsMouseover);
      homePageCollageBtn.addEventListener('mouseout', hidePicIconsMouseout);   
      
   } else {
      homePageCollageBtn.removeEventListener('mouseout', hidePicIconsMouseout);
      homePageCollageBtn.removeEventListener('mouseover', showPicIconsMouseover);
   }  
}

homePageCollageBtn.addEventListener('click', function() {
   mouseoutToggle()
   expandImgIcons()
   activeImgContainer()
})


// *****PRODUCTS*****


// const homePageImgContainters = Array.from(document.querySelectorAll('.img-container'))

























