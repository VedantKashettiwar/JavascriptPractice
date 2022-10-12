function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML="";
    }
}
function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm(){
    let returnval =true;
    clearErrors()
    let name = document.forms['myForm']['fname'].value;
    if(name.length<5){
        seterror("name","*Length is too short");
        returnval =false;
    }
    let email = document.forms['myForm']['femail'].value;
    if(email.length>20){
        seterror("email","*Length is too long");
        returnval =false;
    }
    let phone = document.forms['myForm']['fphone'].value;
    if(phone.length != 10){
        seterror("phone","*Phone number should be of 10 digits!");
        returnval =false;
    }
    let password = document.forms['myForm']['fpass'].value;
    if(password.length<6){
        seterror("pass","*Password should be atleast 6 character long!");
        returnval =false;
    }
    let cpassword = document.forms['myForm']['fcpass'].value;
    if(cpassword != password){
        seterror("cpass","*Password and Confirm Password should match!");
        returnval =false;
    }
    
    return returnval
}
