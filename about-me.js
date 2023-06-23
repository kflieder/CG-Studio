
const openCloseAboutMeBtn = document.getElementById('open-close-about-me-btn');
const bodyOfAboutMeEl = document.getElementById('about-me-body');


openAndCloseBtn(openCloseAboutMeBtn, bodyOfAboutMeEl);





console.log('hi')


function openAndCloseBtn(myBtnEl, changeThisDiv) {
   const isActive = false;
   const btn = myBtnEl;
   const changeStyleOf = changeThisDiv;

   window.addEventListener('click', function() {
      changeWidthOfEl(changeStyleOf);
      isActive = true;
      
   })
}





function changeWidthOfEl(DivId) {
   const div = (DivId);
   div.style.transition = '1s';
   div.style.gridTemplateColumns = '85% 15%';

}










function miHistoria() {
   window.addEventListener('scroll', function(e) {
  // code to handle scroll event
});
}

