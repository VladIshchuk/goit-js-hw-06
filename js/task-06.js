const inputEl = document.getElementById('validation-input');
const validLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onBlurChange);

function onBlurChange(evt){
    const currentLength = evt.target.value.trim().length;
    const isValid = Number(validLength) === currentLength;
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid')
    inputEl.classList.add(isValid ? 'valid' : 'invalid')
}