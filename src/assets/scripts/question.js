import gameData from './data';

export function questionTrack() {
  let level = localStorage.getItem('level');
  let n = Math.floor(Math.random() * 6);
  return gameData[level][n].audio;
}