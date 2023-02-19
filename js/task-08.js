const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onForm);

function onForm(event) {
    event.preventDefault();
    const formElem = event.currentTarget.elements;
    const elements = {
        email: formElem.email.value,
        password: formElem.password.value,
    };
    if (elements.email === "" || elements.password === "") {
    return alert("Please fill in all the fields!");
    };
    console.log(formElem);
    console.log(elements);
    event.currentTarget.reset();
};
