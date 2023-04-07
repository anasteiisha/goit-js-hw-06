const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const Elements = event.currentTarget.elements;
  const email = `${Elements.email.value}`;
  const password = `${Elements.password.value}`;

  if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені");
  }
  const dataForm = { email, password };
  console.log(dataForm);
  event.currentTarget.reset();
}
