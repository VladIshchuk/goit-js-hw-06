
const increm = document.querySelector('[data-action="increment"]');
const decrem = document.querySelector('[data-action="decrement"]');
const counterEl = document.querySelector("#value")

let counterValue = 0;

increm.addEventListener("click", ()=>{
    counterValue += 1;
    counterEl.textContent = counterValue;
});
decrem.addEventListener("click", ()=>{
    counterValue -= 1;
    counterEl.textContent = counterValue;
});