const inputEl = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');
inputEl.addEventListener('input', (evt) => {
    const fontSize = evt.currentTarget.value;
    inputText.style.fontSize = `${fontSize}px`;
});