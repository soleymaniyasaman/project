function valid() {
    var name= document.forms["form"]["name"];
    var email= document.forms["form"]["email"];
    var password= document.forms["form"]["password"];
    var rpassword= document.forms["form"]["repeatpassword"];
    var username=document.forms["form"]["username"];
    if (name.value == '') {
        window.alert ("Your Name must be filled out");
        name.focus();
        return false;
    }
    if (email.value == "") {
        alert ("Your Email must be filled out");
        name.focus();
        return false;
    }
    if (password.value == "") {
        alert ("Password must be filled out");
        name.focus();
        return false;
    }
    if (rpassword.value == "") {
        alert ("Repeat Your Password must be filled out");
        name.focus();
        return false;
    }
    if (username.value == "") {
        window.alert("Your Username must be filled out");
        name.focus();
        return false;
    }
    return true;
    
}