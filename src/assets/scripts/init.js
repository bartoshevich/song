import { levelButtonActivate, levelUp, paginationUpdate } from './game';
import gameData from './data';
import { questionTrack } from './question';


export function init() {
  paginationUpdate();

  let questionImg = document.querySelector('.question-panel__img');
  // questionImg.src = './hidden.jpg';

  let QuestionAudioName = document.querySelector('.audio__name');
  // QuestionAudioName.textContent = '* * *'

  let audioDetails = document.querySelector('.audio-details');
  audioDetails.innerHTML = `
    <h2 class="visibility--hidden">Информация о композиции</h2>
    <ol class="instruction">
        <li>Включите плеер.</li>
        <li>Послушайте фрагмент композиции.</li>
        <li>Выберите автора (источник, название) из списка.</li>
    </ol>
    
    <p class="instruction__help">Если не&nbsp;знаете или сомневаетесь в&nbsp;ответе, посетите  <a class="link" href="./gallery.html">страницу с&nbsp;карточками викторины</a>. Она поможет подготовиться и&nbsp;получить максимальный балл.  </p>
`

let questionPanel = document.querySelector('.question-panel');
questionPanel.innerHTML = '';
questionPanel.innerHTML = `
<img class="question-panel__img" src="./hidden.jpg" alt="" width="480" height="320">
<div class="question__item">
  <p class="audio__name audio__name_first">* * *</p>
  <div class="audio">
    <div class="song">
      <button type="button" class="button song__control" id="questionPlay">
        <svg class="icon">
          <title>play control</title>
          <use xlink:href="./icons.svg#play-circle"></use>
        </svg>
      </button>
      <div class="song__duration">
        <div class="current" id="durationCurrent">00:00</div>
        <div class="length"> / 01:30</div>
      </div>
      <div class="song__timeline" id="progressContainer">
        <div class="progress" id="progressBar">
        </div>
      </div>
    </div>
    <div class="volume-control">
      <button class="button" type="button" id="volume-button">
        <svg class="icon">
          <title>volume control</title>
          <use xlink:href="./icons.svg#volume-2"></use>
        </svg>
      </button>
      <div class="volume-slider" id="volume-slider">
        <div class="volume-percentage" id="volume-percentage">
        </div>
      </div>
    </div>
  </div>

</div>
`


}


export function answersListUpdate() {
  let level = localStorage.getItem('level')

  let answersList = document.querySelector('.answers__list');
  answersList.innerHTML = '';

  let currentList = gameData[level];
  currentList.forEach(el => {
    let name = el.name_first;
    let id = el.id - 1;
    let li = document.createElement('li');
    li.innerHTML = `<li class="answers__item" data-id='${id}'><span class="item__btn"></span>${name}</li>`;
    answersList.append(li);
  }
  )
}


export function setQuestion() {
  const question = new Audio();
  question.currentTime = 0;
  question.src = questionTrack();
  return question;
}