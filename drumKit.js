function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log()
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}


const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// for mobile version 
window.addEventListener('click', e => {
   const keyCode = e.target.getAttribute('data-key');

   const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
   const key = e.target

   if (!audio) return;

   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
});