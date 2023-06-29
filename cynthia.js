
 

function welcomePopup() {
   const audio = document.getElementById('tuktuk');
   const enterBtn = document.getElementById('play-btn-el');
   const welcomeDiv = document.getElementById('welcome');
   const noMusic = document.getElementById('no-music-btn-el');

   noMusic.addEventListener('click', function() {
      welcomeDiv.style.display = 'none';
   })

   enterBtn.addEventListener('click', function() {
      welcomeDiv.style.display = 'none';
      audio.play();
   })
}


function loopVideos() {
  const video1 = document.getElementById('entrance-video');
  const video2 = document.getElementById('chair-video');
  const video3 = document.getElementById('front-desk-video'); 

  video1.onended = function() {
   video2.play();
   video1.style.opacity = 0;
   video2.style.opacity = 1;
  }
  video2.onended = function() {
   video3.play();
   video2.style.opacity = 0;
   video3.style.opacity = 1;
  }
  video3.onended = function() {
   video1.play();
   video3.style.opacity = 0;
   video1.style.opacity = 1;
  }
}



function galleryImages() {
   const images = [];

   for (let i = 1; i <=33; i++) {
      const image = {
         src: 'images/hairstyles/${i}.jpeg'
      };
      images.push(image);
      createImageDivs(`images/hairstyles/${i}.jpeg`);
   }
   console.log(images)
}

function createImageDivs(createDivForThis) {
   const container = document.getElementById('gallery-main');

   const div = document.createElement("div");
   const img = document.createElement('img');

   img.src = createDivForThis;
   container.appendChild(img)
}


galleryImages()







