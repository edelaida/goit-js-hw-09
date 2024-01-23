
const formRead = document.querySelector(".feedback-form");
const STR_KEY = "feedback-form-state"
  
formRead.addEventListener("input", onFormInput);
formRead.addEventListener("submit", onFormSubmit);

function onFormInput(e) { 
  const useremail = formRead.elements.email.value.trim();
  const usermessage = formRead.elements.message.value.trim();
  
  const strForm = {
    formEmail: useremail,
    formMessage: usermessage,
    }    
  localStorage.setItem(STR_KEY, JSON.stringify(strForm));   
    }
    
function onFormSubmit(e) {
  e.preventDefault(); 
  const useremail = e.target.elements.email.value.trim();
  const usermessage = e.target.elements.message.value.trim();
  const strForm = {
   formEmail: useremail,
   formMessage: usermessage,
  }
   
  if (!useremail || !usermessage) return alert(`All form fields must be filled in`);
    
  localStorage.removeItem(STR_KEY);
  console.log(strForm);
      formRead.reset();
} 
    
function LocalStorage() {
  const storageValue = localStorage.getItem(STR_KEY);
  const parseKey = JSON.parse(storageValue);
  
      if (storageValue) {
        formRead.email.value = parseKey.formEmail;
        formRead.message.value = parseKey.formMessage;
    };
}
LocalStorage();
