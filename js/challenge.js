let paused = false;
setInterval(() => {
  if (!paused) {
    counter.innerHTML++
  }
}, 1000);
const togglePaused = () => (paused = !paused);
pause.addEventListener('click', togglePaused);
// the plus button functionality
const plusButton = document.getElementById('plus');
plus.addEventListener('click',() =>{
    counter.innerHTML++
})
// the minus button functionality

const minusButton = document.getElementById('minus');
minus.addEventListener('click',() => {
    counter.textContent--;
})

// heart button functionality
const heartButton = document.getElementById('heart');
heartButton.addEventListener('click',() => {
    counter.textContent = `i have been liked ${counter.textContent} times`;
})