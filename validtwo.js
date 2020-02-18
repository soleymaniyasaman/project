function validtwo() {
    var password= document.forms["form"]["password"];
    var username=document.forms["form"]["username"];

    if (password.value == "") {
        alert ("Password must be filled out");
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