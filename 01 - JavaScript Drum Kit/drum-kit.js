function removeTransition(e) {
  if (e.propertyName !== `transform`) return; // skip it if it's not a transform
  this.classList.remove(`playing`);
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add(`playing`);
}

window.addEventListener(`keydown`, playSound);
const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener(`transitionend`, removeTransition));
