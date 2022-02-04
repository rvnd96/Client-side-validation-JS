const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	//get the values from the inputs
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	//check username
	if (usernameValue === '') {
		setErrorFor(username, 'Username Cannot be empty');
	} else {
		setSuccessFor(username);
	}

	//check email
	if (emailValue === '') {
		setErrorFor(email, 'Email Cannot be empty');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email is not valid');
	}
	 else {
		setSuccessFor(email);
	}

	//check password
	if (passwordValue === '') {
		setErrorFor(password, 'Password Cannot be empty');
	} else {
		setSuccessFor(password);
	}

	//check password2
	if (password2Value === '') {
		setErrorFor(password2, 'Password check Cannot be empty');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords are not matching');
	} else {
		setSuccessFor(password2);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement; //.form-control
	const small = formControl.querySelector('small');

	//add error message inside small
	small.innerText = message;

	//add error class
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement; //.form-control

	//add error class
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}