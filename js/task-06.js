const inputEl = document.querySelector("#validation-input");
const inputElLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (Number(event.target.value.length) === Number(inputElLength)) {
    inputEl.classList.add("valid");
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
  } else {
    inputEl.classList.add("invalid");
  }
}
