const form = document.querySelector('.form');
const email = document.querySelector('.email');
const btn = document.querySelector('.btn');
const small = form.querySelector('small');

btn.addEventListener('click', () => {
  const emailValue = email.value.trim();

  if(emailValue === ""){
    form.classList.add('error');
    small.innerText = "Please provide an email address";

  }else if(!isEmail(emailValue)){
    form.classList.add('error');
    small.innerText = "Please provide a valid email address";

  }else {
    form.classList.remove('error');
  }
})


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}