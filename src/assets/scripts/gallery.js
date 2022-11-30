import gameData from './data';
import { galleryLayout } from './galleryLayout';


galleryLayout();
let isPlay = false;
let isMuted = false;
const audio = new Audio();

const galleryPlayButton = document.querySelectorAll('.song__control');

galleryPlayButton.forEach((el) => {

  el.addEventListener('click', () => {
    if (isPlay === false) {
      let level = el.dataset.level;
      let id = el.dataset.id;
      audio.src = gameData[level][id].audio;
      audio.currentTime = 0;
      audio.play();
      startRecord();
      isPlay = true;
      el.classList.add('is-playing');
      el.innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#pause-circle"></use>  </svg>'
    } else {
      if (el.classList.contains('is-playing')) {
        audio.pause();
        isPlay = false;
        stopRecord();
        el.innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#play-circle"></use>  </svg>'
      } else {
        stopPlayList();
        let level = el.dataset.level;
        let id = el.dataset.id;
        audio.src = gameData[level][id].audio;
        audio.currentTime = 0;
        audio.play();
        startRecord();
        isPlay = true;
        el.classList.add('is-playing');
        el.innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#pause-circle"></use>  </svg>'
      }
    }
  })
})



function stopPlayList() {
  for (let i = 0; i < galleryPlayButton.length; i++) {
    let el = galleryPlayButton[i];
    let level = el.dataset.level;
    let id = el.dataset.id;
    audio.src = gameData[level][id].audio;
    audio.currentTime = 0;
    audio.pause();
    isPlay = false;
    stopRecord();
    el.classList.remove('is-playing');
    el.innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#play-circle"></use>  </svg>'
    document.getElementById(`progressBar-${i}`).style.width = 0;
    document.getElementById(`durationCurrent-${i}`).textContent = '00:00';
  }
}



function startRecord() {
  const recordImage = document.querySelector('.record__image');
  recordImage.classList.add('record__image_play');
}

function stopRecord() {
  const recordImage = document.querySelector('.record__image');
  if (recordImage.classList.contains('record__image_play')) {
    recordImage.classList.remove('record__image_play');
  }
}


audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
  for (let i = 0; i < galleryPlayButton.length; i++) {

    if (galleryPlayButton[i].classList.contains('is-playing')) {
      // const { duration, currentTime } = e.target;
      let duration = audio.duration;
      let currentTime = audio.currentTime;
      const progressPercent = (currentTime / duration) * 100;
      const progress = document.getElementById(`progressBar-${i}`);
      progress.style.width = `${progressPercent}%`;
      document.getElementById(`durationCurrent-${i}`).textContent = (formatTime(Math.floor(currentTime)));

      if (duration === currentTime) {
        audio.pause();
        audio.currentTime = 0;
        progress.style.width = 0;
        document.getElementById(`durationCurrent-${i}`).textContent = currentTime;
        galleryPlayButton[i].innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#play-circle"></use>  </svg>'

        const recordImage = document.querySelector('.record__image');
        if (recordImage.classList.contains('record__image_play')) {
          recordImage.classList.remove('record__image_play');
        }
      }

    }
  }
}


function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (min < 10) {
    min = `0${min}`;
  };
  if (sec < 10) {
    sec = `0${sec}`;
  };
  return `${min}:${sec}`;
};


playBySlider();

function playBySlider() {
  for (let i = 0; i < galleryPlayButton.length; i++) {
    const progressContainer = document.getElementById(`progressContainer-${i}`);
    progressContainer.addEventListener('click', function (e) {
      if (galleryPlayButton[i].classList.contains('is-playing')) {

        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;

      } else {
        let el = galleryPlayButton[i];
        stopPlayList();
        let level = el.dataset.level;
        let id = el.dataset.id;
        audio.src = gameData[level][id].audio;
        audio.currentTime = 0;
        audio.play();
        startRecord();
        isPlay = true;
        el.classList.add('is-playing');
        el.innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#pause-circle"></use>  </svg>'

      }
    });
  }
}




//  Volume

for (let i = 0; i < galleryPlayButton.length; i++) {

  let volumeSlider = document.getElementById(`volume-slider-${i}`);
  let volumeEl = document.getElementById(`volume-button-${i}`);

  volumeSlider.addEventListener('click', e => {
    if (galleryPlayButton[i].classList.contains('is-playing')) {
      const sliderWidth = window.getComputedStyle(volumeSlider).width;
      const newVolume = e.offsetX / parseInt(sliderWidth);
      audio.volume = newVolume;
      document.getElementById(`volume-percentage-${i}`).style.width = newVolume * 100 + '%';
    } else {
      volumeSlider.classList.add('help');
      setTimeout(() => {
        volumeSlider.classList.remove('help');
      }, 2000);
    }
  }, false);



  volumeEl.addEventListener("click", () => {
    if (galleryPlayButton[i].classList.contains('is-playing')) {
      if (isMuted === true) {
        volumeEl.innerHTML = ` 
        <svg class="icon">
          <title>volume control</title>
          <use xlink:href="./assets/icons.svg#volume-2"></use>
        </svg>`;
        isMuted = false;
        audio.muted = false;

        document.getElementById(`volume-percentage-${i}`).style.width = audio.volume * 100 + '%';
      } else {
        volumeEl.innerHTML = ` 
        <svg class="icon">
          <title>volume control</title>
          <use xlink:href="./assets/icons.svg#volume-x"></use>
        </svg>`;
        isMuted = true;
        audio.muted = true;
        document.getElementById(`volume-percentage-${i}`).style.width = 0 + '%';
      }
    } else {
      volumeSlider.classList.add('help');
      setTimeout(() => {
        volumeSlider.classList.remove('help');
      }, 2000);
    }
  });


}