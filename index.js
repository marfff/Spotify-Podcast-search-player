function validateForm(x) {
    var x = document.forms["myform"]["emailaddress"].value;
    let regex = /^([a-zA-z]{1,15})@([a-zA-z]{1,6})(\.com)$/

    let isExisting = regex.test(x);
    // alert(isExisting);


    if (x == "") {
        alert("Oops! Please add your email -It can't be blank")
        return
    }

    if (isExisting) {
        alert("HAPPY FACE :)");
        return
    }

    else {
        alert("Oops! Please check your email-please enter a valid email");
        return
    }
}