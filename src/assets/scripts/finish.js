import { newGame, upgrade } from './list';


export function finish() {

  const mainBody = document.querySelector('.main');
  let scoreInfo = document.querySelector('.result__score');
  let score = localStorage.getItem('score');

if (score < 30) {
  mainBody.innerHTML = `
  <div class="congratulation">
  <p class="congratulation__title">Вы можете больше!</p>
  <p class="congratulation__text">Вы набрали ${score} из 30 возможных очков. </p>
  <button class="button congratulation__new-game-button" type="button">Попробовать еще раз</button>
  </div>`
} else {
  mainBody.innerHTML = `
  <div class="congratulation">
  <p class="congratulation__title">Поздравляю!</p>
  <p class="congratulation__text">Вы прошли викторину и набрали максимальное количество баллов! </p>
  <button class="button congratulation__new-game-button" type="button">Сыграть еще раз</button>
  </div>`
}

  


  const newGameButton = document.querySelector('.congratulation__new-game-button');

  newGameButton.addEventListener('click', () => {
    localStorage.setItem('level', 0);
    scoreInfo.textContent = 0;
    localStorage.setItem('score', 0)
    initionalLayout();
    newGame();
    upgrade();
    windowReload();
  });


  
}

export function windowReload() {
  window.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('level', 0);
    localStorage.setItem('score', 0)
    initionalLayout();
    newGame();
    upgrade();
  }); 
}


function initionalLayout() {
  const mainBody = document.querySelector('.main');
  mainBody.innerHTML = `
<section>
  <h2 class="visibility--hidden">Вопрос викторины</h2>
  <div class="question-panel"> 
  </div>
</section>

<section class="info-panel">
  <h2 class="visibility--hidden">Игровое поле</h2>
  <section>
    <h2 class="visibility--hidden">Варианты ответов</h2>
    <ul class="answers__list">
    </ul>
    <button class="level-button" type="button" id="levelButton">Следующий уровень</button>
  </section>
  <section class="audio-details">
  </section>     
</section>
`
}