const inputName = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
  nameText.textContent = event.currentTarget.value;
  if (nameText.textContent === "") {
    return nameText.textContent = "Anonymous";
  };
});
