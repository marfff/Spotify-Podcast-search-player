function validateForm(x) {
    var x = document.forms["myform"]["emailaddress"].value;
    let mailformat = "/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/";

    if (x = "") {
        alert("Oops! Please add your email")
        return
    }

    else if (x.match(mailformat)) {
        alert("HAPPY FACE");
        return
    }

    else {
        alert("Oops! Please check your email");
        return
    }
}