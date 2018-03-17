var my_password = "auto";
var my_email = "amin@projaro.com";

function showField(field) {
	if (field == "my_email") {
		document.getElementById('phone_div').style.visibility = "hidden";
		document.getElementById('email_div').style.visibility = "visible"
	} else {
		document.getElementById('phone_div').style.visibility = "visible";
		document.getElementById('email_div').style.visibility = "hidden"
	}
}

// function login(email, password) {
// 	if (email == my_email && password == my_password) {
// 	alert("Wecole Back!")
// } else {
// 	alert("Email or Password Incorrect")
// 	}

// }


function welcome(email) {
	alert("Welcome back" + email)
}


function signIn(){
	var email = document.getElementById('my_email').value;
	var password = document.getElementById('my_password').value;
	if (email == my_email && password == my_password) {
		
		welcome(my_email)

	}else{
		alert("Email or Password is Incorrect")
	}
}