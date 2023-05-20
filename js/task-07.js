const rangeEl = document.querySelector('#font-size-control');
const ChangeText = document.querySelector('#text');

rangeEl.addEventListener('input',(evt) => {
  ChangeText.style.fontSize = `${evt.currentTarget.value}px`
});
 