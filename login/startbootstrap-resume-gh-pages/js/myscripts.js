// Validate the sign in form to see if user inputed data
function validate() {
	 var funame = document.forms["myLoginForm"]["uname"].value;
	 var fpassword = document.forms["myLoginForm"]["password"].value;
    if (funame == "") {
        document.getElementById("firstalert").innerHTML = "Username missing.";
        return false;
    }
	 if (fpassword == "") {
        document.getElementById("secondalert").innerHTML = "Password missing.";
        return false;
    }
}
// Validate Sign Up form 
function validateForm() {
    var fname = document.forms["myForm"]["input1"].value;
	 var funame = document.forms["myForm"]["input2"].value;
	 var fpassword = document.forms["myForm"]["input3"].value;
    if (fname == "") {
        document.getElementById("alert1").innerHTML = "Name must be filled out.";
        return false;
    }
	 if (funame.length < 6 || funame.length > 20) {
        document.getElementById("alert2").innerHTML = "Username must be at least 6 characters.";
        return false;
    }
	 if (fpassword == "") {
        document.getElementById("alert3").innerHTML = "Password must be filled out.";
        return false;
    }
}