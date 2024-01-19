 const STR_KEY = "feedback-form-state"
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const useremail = e.target.elements.email.value;
    const text = e.target.elements.message.value;
    const data = { useremail, text };
         console.log(data);
     saveToLs(STR_KEY, data);
}

function saveToLs(key, value) {
    const zip = JSON.stringify(value);
    localStorage.setItem(key, zip);
}
function loadFromLS(key) {
    const zip = localStorage.getItem(key);
    const data = JSON.parse(zip);
}