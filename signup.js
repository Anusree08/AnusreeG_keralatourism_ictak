const form = document.getElementById('form');
const username = document.getElementById('username');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

    
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
},false);

form.addEventListener('submit',function(e){
  if(lvalidate()){
    window.location.href="login.html"
  }
  else{
    e.preventDefault();
  }
},false);




function lvalidate()
{
  var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
  var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var phn = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(res.test(email.value)!="1")
    {
      setErrorFor(email, 'Not a valid email');
        return false;
    }
    else if(psr.test(password.value)!="1")
    {
      setErrorFor(password, 'Password cannot be blank');
        return false;
    }
    else if(phn.test(number.value)!="1")
    {
      setErrorFor(number, 'Not a valid phone number');
        return false;
    }
    else
    {
        // window.alert("validation Success");
        return true;
    }
    
}
// @$!%*?&
// (?=.*[@$!%*?&])


function checkInputs() {
	// trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const numberValue = number.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
    // return false;
	} else {
    setSuccessFor(username);
    // return true;
    }
    
    if(numberValue === '') {
    setErrorFor(number, 'Phone number cannot be blank');
    // return false;
	} else if (!isPhone(numberValue)) {
    setErrorFor(number, 'Not a valid phone number');
    // return false;
	} else {
    setSuccessFor(number);
    // return true;
	}
	
	if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
    // return false;
	} else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
    // return false;
	} else {
    setSuccessFor(email);
    // return true;
	}
	
	if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
    // return false;
	} else {
    setSuccessFor(password);
    // return true;
	}
	
	if(password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
    // return false;
	} else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
    // return false;
	} else{
    setSuccessFor(password2);
    // return true;
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-controls error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-controls success';
}



function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(number) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number);
}


const indicator = document.querySelector(".indicator");
const input = document.querySelector(".find input");
    const weak = document.querySelector(".weak");
    const medium = document.querySelector(".medium");
    const strong = document.querySelector(".strong");
    const text = document.querySelector(".text");
    // const showBtn = document.querySelector(".showBtn");
    let regExpWeak = /[a-z]/;
    let regExpMedium = /[A-Z]/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,),\d+]/;

    function trigger(){
      if(input.value != ""){
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if(input.value.length <= 4 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
        if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
        if(input.value.length >= 8 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
        if(no==1){
          weak.classList.add("active");
          text.style.display = "block";
          text.textContent = "Your password is too weak";
          text.classList.add("weak");
        }
        if(no==2){
          medium.classList.add("active");
          text.textContent = "Your password is medium";
          text.classList.add("medium");
        }else{
          medium.classList.remove("active");
          text.classList.remove("medium");
        }
        if(no==3){
          weak.classList.add("active");
          medium.classList.add("active");
          strong.classList.add("active");
          text.textContent = "Your password is strong";
          text.classList.add("strong");
        }else{
          strong.classList.remove("active");
          text.classList.remove("strong");
        }
        
      }else{
        indicator.style.display = "none";
        text.style.display = "none";
        // showBtn.style.display = "none";
      }
    }








