const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

    
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
},false);

form.addEventListener('submit',function(e){
  if(lvalidate()){
    window.location.href="index.html"
  }
  else{
    e.preventDefault();
  }
},false);




function lvalidate()
{
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      
    
     if(psr.test(password.value)!="1")
    {
      setErrorFor(password, 'Invalid Password ');
        return false;
    }
    else
    {
        // window.alert("validation Success");
        return true;
    }
    
}

function checkInputs() {
	// trim to remove the whitespaces
    const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
		
	if(usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
    }
    
	
	if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
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





 
   







