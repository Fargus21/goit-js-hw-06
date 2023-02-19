const valInput = document.querySelector('#validation-input');
const dataSetLength = valInput.dataset.length
valInput.addEventListener('blur', changingBorderColor);
function changingBorderColor () {
    if (Number(dataSetLength) !== valInput.value.length) {
        valInput.classList.remove('valid');
        valInput.classList.add('invalid');
    }
     else {
        valInput.classList.remove('invalid');
        valInput.classList.add('valid');
     }; 
};