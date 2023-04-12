$('.image-slider').slick({

   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 3,
   centerMode: true,
   variableWidth: true

});


let video1 = document.getElementById('front-desk-video');

video1.addEventListener('mouseover', function() {
  video1.play();
});

video1.addEventListener('mouseout', function() {
  video1.pause();
});


const homePageCollageBtn = document.getElementById('open-close');

function moveImgContainers(id, transformValue) {
   let imgContainers = document.getElementById(id);
   imgContainers.style.transition = "all 0.5s ease-in-out";
   imgContainers.style.transform = transformValue || "none";
}

function changeBtnWidths(id, widthValue) {
   let btnWidths = document.getElementById(id);
   btnWidths.style.width = widthValue;
}


let mouseoutEnabled = false

window.addEventListener('load', function() {
   mouseoutToggle();
});


function hidePicIconsMouseout() {
   moveImgContainers('img-cont-1', 'translate(0, 0)');
   moveImgContainers('img-cont-2', 'translate(0, 0)');
   moveImgContainers('img-cont-3', 'translate(0, 0)');
   moveImgContainers('img-cont-4', 'translate(0, 0)');
   moveImgContainers('img-cont-5', 'translate(0, 0)');
   changeBtnWidths('open-close', '90%')
   changeBtnWidths('close-btn', '10%')
}
function showPicIconsMouseover() {
   moveImgContainers('img-cont-1', 'translate(20px, 20px)');
   moveImgContainers('img-cont-2', 'translate(40px, 40px)');
   moveImgContainers('img-cont-3', 'translate(60px, 60px)');
   moveImgContainers('img-cont-4', 'translate(80px, 80px)');
   moveImgContainers('img-cont-5', 'translate(100px, 100px)');
   changeBtnWidths('open-close', '80%');
   changeBtnWidths('close-btn', '20%')

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
function expandImgIcons() {
   moveImgContainers('img-cont-1', 'translate(0, -2vw)');
   moveImgContainers('img-cont-2', 'translate(12vw, 2vw)');
   moveImgContainers('img-cont-3', 'translate(0, 10vw)');
   moveImgContainers('img-cont-4', 'translate(12vw, 14vw)');
   moveImgContainers('img-cont-5', 'translate(0, 22vw)');
}














homePageCollageBtn.addEventListener('click', function() {
   mouseoutToggle()
   expandImgIcons()
   console.log(mouseoutEnabled)
})









