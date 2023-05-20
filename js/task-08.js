
const loginForm = document.querySelector(".login-form");
const mail = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const objEl = {
    email: mail.value,
    pass: password.value
  }

  if (mail.value === '' || password.value === '') {
    return alert(`Всі поля мають бути заповнені!`)
  }
  console.log(objEl);
  loginForm.reset();
});