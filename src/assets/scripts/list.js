import gameData from './data';
import { recordPlay } from './recordPlay';
import { levelButtonActivate, levelUp, paginationUpdate } from './game';
import { init, answersListUpdate, setQuestion } from './init';
import { levelDefine } from './levelDefine';
import { finish, windowReload } from './finish';

newGame();

let score = 0;
let scoreInfo = document.querySelector('.result__score');
scoreInfo.textContent = score;
localStorage.setItem('score', 0)

let isUpgradable = false;
let isQuestionPlay = false;
let isPlay = false;



export function newGame() {

  levelDefine();
  let level = localStorage.getItem('level')
  let roundResult = 6;

  let score = Number(localStorage.getItem('score'));
 

  init();
  answersListUpdate();

  const question = setQuestion();
  question.load;
  const questionPlayButton = document.querySelector('#questionPlay');
  questionPlayButton.addEventListener('click', playQuestion);

  const audio = new Audio();
  let isGameRunning = true;



  let audioDetails = document.querySelector('.audio-details');
  let answersItems = document.querySelectorAll('.answers__item');

  answersItems.forEach(el => {
    let id = el.dataset.id;
    el.addEventListener('click', () => {
      audioPause();
      let imageSrc = gameData[level][id].image;
      let nameFirst = gameData[level][id].name_first;
      let nameSecond = gameData[level][id].name_second;
      let description = gameData[level][id].description;
      let duration = gameData[level][id]['duration'];
      audio.src = gameData[level][id].audio;
      audio.currentTime = 0;
      roundResult -= 1;
     

      audioDetails.innerHTML = ` 
    <h2 class="visibility--hidden">Информация о композиции</h2>
      <div class="audio-card">
      <img class="audio-card__img" src="${imageSrc}" alt="" width="480" height="320">
      <div class="audio-card__name">
        <p class="audio-card__name_first-name">${nameFirst}</p>
        <p class="audio-card__name_second-name">${nameSecond}</p>
      </div>
      <div class="audio">
        <div class="song">
          <button type="button" class="button song__control" id="audioCard" data-id="${id}">
            <svg class="icon">
              <title>play control</title>
              <use xlink:href="./assets/icons.svg#play-circle"></use>
            </svg>
          </button>
          <div class="song__duration">
            <div class="current" id="durationCurrent-2">00:00</div>
            <div class="length"> / ${duration}</div>
          </div>
          <div class="song__timeline" id="progressContainer-2">
            <div class="progress" id="progressBar-2">
            </div>
          </div>
        </div>
        <div class="volume-control">
          <button class="button" type="button" id="volume-button-2">
            <svg class="icon">
              <title>volume control</title>
              <use xlink:href="./assets/icons.svg#volume-2"></use>
            </svg>
          </button>
          <div id="volume-slider-2" class="volume-slider">
            <div id="volume-percentage-2" class="volume-percentage">
            </div>
          </div>
        </div>
      </div>

      <div class="audio-card__text">
      ${description}
      </div>
    </div>`

      let audioButton = document.querySelector('#audioCard');
      audioButton.addEventListener('click', playAudioCard);

      playByClick(audio, 'progressContainer-2', playAudioCard)
      volumeBySlider('volume-slider-2', audio, 'volume-percentage-2');
      volumeByButton('volume-button-2', audio, 'volume-percentage-2');

      if (isGameRunning) {
        if (audio.src === question.src) {
          // console.log('нашли')
          stopQuestion()
          el.innerHTML = `<span class="item__btn item__btn_succes"></span>${nameFirst}`;
          let questionImg = document.querySelector('.question-panel__img');
          let questionAudioName = document.querySelector('.audio__name');
          questionImg.src = imageSrc;
          questionAudioName.textContent = nameFirst;
          let successSound = new Audio;
          successSound.src = './success.mp3'
          successSound.play();
          isGameRunning = false;
          score = 1 * (score + roundResult);
          if (score > 30) {
            score = 30;
          }
          scoreInfo.textContent = score;
          localStorage.setItem('score', score)

          

          if (level < 5) {
            levelButtonActivate();
            isUpgradable = true;
            // levelUp();
            // newGame();
            const levelButton = document.querySelector('#levelButton');
            levelButton.addEventListener('click', () => {
              audio.pause();
              audio.currentTime = 0;
              isPlay = false;
              question.pause();
              question.currentTime = 0;
              isQuestionPlay = false;
              const recordImage = document.querySelector('.record__image');
              if (recordImage.classList.contains('record__image_play')) {
                recordImage.classList.remove('record__image_play');
              }
            })
          } else {
            question.pause();
            question.currentTime = 0;
            audio.pause();
            audio.currentTime = 0;
            finish();
          }
        } else {
          // stopQuestion()
          el.innerHTML = `<span class="item__btn item__btn_error"></span>${nameFirst}`;
          let errorSound = new Audio;
          errorSound.src = './error.mp3'
          errorSound.play();
        }
      }


    });
  })


  function stopQuestion() {
    question.pause();
    isQuestionPlay = false;
    const recordImage = document.querySelector('.record__image');
    recordImage.classList.remove('record__image_play');
    questionPlayButton.innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#play-circle"></use>  </svg>'

  }



  function playAudioCard() {

    let audioButton = document.querySelector('#audioCard');

    if (isPlay === false) {
      if (isQuestionPlay) {
        stopQuestion()
      }

      audio.play();
      recordPlay();
      isPlay = true;
      audio.addEventListener('timeupdate', () => {
        updateProgress(audio, 'audioCard', `progressBar-2`, `durationCurrent-2`);
      });
      audioButton.innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#pause-circle"></use>  </svg>'
    } else {
      audioPause();
      audioButton.innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#play-circle"></use>  </svg>'
    }
  }


  function updateProgress(song, idButton, idProgressBar, idDuration) {
    let duration = song.duration;
    let currentTime = song.currentTime;
    let audioButton = document.getElementById(idButton);

    
      const progressPercent = (currentTime / duration) * 100;
      const progress = document.getElementById(idProgressBar);
      if (progress === null) {
        return
      }
      progress.style.width = `${progressPercent}%`;
      document.getElementById(idDuration).textContent = (formatTime(Math.floor(currentTime)));
    
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

    if (duration === currentTime) {
      song.pause();
      if (song === audio) {
        isPlay = false;
      }
      if (song === question) {
        isQuestionPlay = false;
      }
      currentTime = '00:00';
      progress.style.width = 0;
      document.getElementById(idDuration).textContent = currentTime;
      audioButton.innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#play-circle"></use>  </svg>'

      const recordImage = document.querySelector('.record__image');
      if (isQuestionPlay === false && recordImage.classList.contains('record__image_play')) {
        recordImage.classList.remove('record__image_play');
      }
    }
  }



  function audioPause() {
    audio.pause();
    isPlay = false;
    const recordImage = document.querySelector('.record__image');
    if (isQuestionPlay === false && recordImage.classList.contains('record__image_play')) {
      recordImage.classList.remove('record__image_play');
    }
  }




  function playByClick(song, idProgressBar, callback) {
    const progressContainer = document.getElementById(idProgressBar);
    progressContainer.addEventListener('click', function (e) {

      if (song === audio && isPlay === true || song === question && isQuestionPlay === true) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = song.duration;
        song.currentTime = (clickX / width) * duration;
      } else {
        callback();
        // console.log('callback')
      }
    });
  }



  function volumeBySlider(idSlider, song, idVolumeBar) {
    const volumeSlider = document.getElementById(idSlider);

    volumeSlider.addEventListener('click', e => {
      const sliderWidth = window.getComputedStyle(volumeSlider).width;
      const newVolume = e.offsetX / parseInt(sliderWidth);
      song.volume = newVolume;
      document.getElementById(idVolumeBar).style.width = newVolume * 100 + '%';
    })
  }


  function volumeByButton(idVolumeButton, song, idVolumeSlider) {
    const volumeButton = document.getElementById(idVolumeButton);
    volumeButton.addEventListener("click", () => {
      if (song.muted) {
        volumeButton.innerHTML = ` 
      <svg class="icon">
        <title>volume control</title>
        <use xlink:href="./assets/icons.svg#volume-2"></use>
      </svg>`;
        song.muted = false;

        document.getElementById(idVolumeSlider).style.width = song.volume * 100 + '%';
      } else {
        volumeButton.innerHTML = ` 
      <svg class="icon">
        <title>volume control</title>
        <use xlink:href="./assets/icons.svg#volume-x"></use>
      </svg>`;
        song.muted = true;
        document.getElementById(idVolumeSlider).style.width = 0 + '%';
      }
    })
  }


  function playQuestion() {


    let audioButton = document.querySelector('#audioCard');
    if (isQuestionPlay === false) {
      if (isPlay) {
        audio.pause();
        const recordImage = document.querySelector('.record__image');
        recordImage.classList.remove('record__image_play');
        audioButton.innerHTML = ' <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#play-circle"></use>  </svg>'
        isPlay = false;
      }

      questionPlayButton.innerHTML = ` <svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#pause-circle"></use>  </svg> `
      isQuestionPlay = true;
      question.play();
      recordPlay();
      question.addEventListener('timeupdate', () => {
        updateProgress(question, 'questionPlay', `progressBar`, `durationCurrent`);
      });

    } else {
      questionPlayButton.innerHTML = `<svg class="icon">     <title>play control</title>     <use xlink:href="./assets/icons.svg#play-circle"></use>  </svg> `
      isQuestionPlay = false;
      question.pause();
      recordPlay();
    }
  }



  playByClick(question, 'progressContainer', playQuestion);
  volumeBySlider('volume-slider', question, 'volume-percentage');
  volumeByButton('volume-button', question, 'volume-percentage');


}



function levelPlusOne() {
  const levelButton = document.querySelector('#levelButton');
  let level = Number(localStorage.getItem('level'));
  level += 1;
  localStorage.setItem('level', level);
  levelButton.classList.remove('level-button_active');
}


export function upgrade() {
  const levelButton = document.querySelector('#levelButton');

  levelButton.addEventListener('click', () => {
    if (isUpgradable) {
      levelPlusOne();
      newGame();
      isUpgradable = false;
    }
  });
}

upgrade();




windowReload();