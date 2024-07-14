import '/style.css'
import '/grid.css'
import '/audio/light-off.mp3'
import '/audio/light-on.mp3'
import '/table.css'

const themeBtn = document.querySelector('.theme');

function getCurrentTheme(){
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.getItem('sargam.theme') ? theme = localStorage.getItem('sargam.theme') : null;
  return theme;
}

function loadTheme(theme){
  const root = document.querySelector(':root');
  if(theme === "light"){
    themeBtn.innerHTML = `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.399 10.399 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256Z" stroke="var(--silver7)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  } else {
    themeBtn.innerHTML = `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M17.66 17.66l1.41 1.41M4.93 4.93l1.41 1.41" stroke="var(--silver1)" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="var(--silver1)" stroke-width="1" stroke-miterlimit="10"/></svg>`;
  }
  root.setAttribute('color-scheme', `${theme}`);
}

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  let audio;
  if(theme === 'dark'){
    audio = document.querySelector('.theme-audio--light-on');
    theme = 'light';
  } else {
    audio = document.querySelector('.theme-audio--light-off');
    theme = 'dark';
  }
  audio.currentTime = 0;
  audio.play();
  localStorage.setItem('sargam.theme', `${theme}`);
  loadTheme(theme);
})

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
})