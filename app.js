
function validatePhone() {

    var num = document.getElementById(phno).value;

    for (var i = 0; i < num.length; i++) {
        var cur = num.charAt(i);
        if (num.length==0)
        {
            alert("try phone number again")
        }
    }

}


// HERE, JQuery "LISTENING" starts
$(document).ready(function() {


    $('input').focus(function () {
        $(this).css('background','pink');
    });

    $('input').blur(function () {
        $(this).css('background','white');
    });

    $('button#submit').click(validatePhone());

});

