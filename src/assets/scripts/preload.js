import gameData from './data';

async function preload() {
  for (let i = 1; i < gameData.length; i++) {
    for (let j = 0; j < 6; j++) {
      const audio =  new Audio();
      audio.src = gameData[i][j].audio;
      audio.load();

      const img = new Image();
      img.src = gameData[i][j].image;
    }
  }

  let successSound = new Audio;
  successSound.src = './success.mp3'
  successSound.load();

  let errorSound = new Audio;
  errorSound.src = './error.mp3'
  errorSound.play();

}

preload()