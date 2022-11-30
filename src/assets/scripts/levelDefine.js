export function levelDefine() {
  let level;
  if (localStorage.getItem('level')) {
    level = localStorage.getItem('level');
  } else {
    level = 0;
    localStorage.setItem('level', 0)
  }
}