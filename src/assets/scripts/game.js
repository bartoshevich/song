import gameData from './data';
import { questionTrack } from './question';
import { init, answersListUpdate, setQuestion } from './init'


export function levelButtonActivate() {
  const levelButton = document.querySelector('.level-button');
  levelButton.classList.add('level-button_active')
}

export function levelButtonDeactivate() {
  const levelButton = document.querySelector('.level-button');
  levelButton.classList.remove('level-button_active')
}

export function levelUp() {
  const levelButton = document.querySelector('.level-button');
  const levelButtonActive = document.querySelector('.level-button_active');

  function levelPlusOne() {
    let level = Number(localStorage.getItem('level'));
    level += 1;
    localStorage.setItem('level', level);
    levelButton.classList.remove('level-button_active');
    init();
    answersListUpdate();
  }

  setQuestion();

  levelButtonActive.addEventListener('click', levelPlusOne, { once: true });
  // levelButtonActive.removeEventListener("click", levelPlusOne);
}


export function paginationUpdate() {

  const paginationItems = document.querySelectorAll('.pagination__item');
  paginationItems.forEach((el) => {
    let level = Number(localStorage.getItem('level'));
    let number = el.dataset.level;
    if (number == level) {
      el.classList.add('pagination__item_active');
    } else {
      el.classList.remove('pagination__item_active');
    }
  })

}