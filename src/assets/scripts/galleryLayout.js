import gameData from './data';


export function galleryLayout() {
  localStorage.setItem('score', 0)


  const blocksItems = document.querySelectorAll('.block__items');
  let k = 0;

  for (let i = 0; i < blocksItems.length; i++) {
    let sourse = gameData[i + 1];

    for (let j = 0; j < sourse.length; j++) {
      let div = document.createElement('div');
      div.classList.add('audio-card');
      div.classList.add('audio-card_gallery');
      blocksItems[i].append(div);


      let imageSrc = gameData[i + 1][j].image;
      let nameFirst = gameData[i + 1][j].name_first;
      let nameSecond = gameData[i + 1][j].name_second;
      let description = gameData[i + 1][j].description;
      let duration = gameData[i + 1][j]['duration'];


      div.innerHTML = ` 
 
  <img class="audio-card__img" src="${imageSrc}" alt="" width="480" height="320">
  <div class="audio-card__name">
    <p class="audio-card__name_first-name_gallery">${nameFirst}</p>
    <p class="audio-card__name_second-name_gallery">${nameSecond}</p>
  </div>
  <div class="audio">
    <div class="song">
      <button type="button" class="button song__control" id="audioCard" data-track=${k} data-level=${i + 1} data-id="${j}">
        <svg class="icon">
          <title>play control</title>
          <use xlink:href="./assets/icons.svg#play-circle"></use>
        </svg>
      </button>
      <div class="song__duration">
        <div class="current" id="durationCurrent-${k}">00:00</div>
        <div class="length"> / ${duration}</div>
      </div>
      <div class="song__timeline" id="progressContainer-${k}">
        <div class="progress" id="progressBar-${k}">
        </div>
      </div>
    </div>
    <div class="volume-control">
      <button class="button gallery_volume-control" type="button" id="volume-button-${k}">
        <svg class="icon">
          <title>volume control</title>
          <use xlink:href="./assets/icons.svg#volume-2"></use>
        </svg>
      </button>
      <div id="volume-slider-${k}" class="volume-slider">
        <div id="volume-percentage-${k}" class="volume-percentage">
        </div>
      </div>
    </div>
  </div>

  <div class="audio-card__text">
  ${description}
  </div>
`

      k += 1;

    }
  }
}