function validatePhone() {

    var numField = document.getElementById('phno');
    var num = numField.value
    var numbers = ["0","1", "2","3", "4","5", "6", "7","8", "9", "-"];

        for (var i=0; i<num.length; i++) {
            var cur = num.charAt(i);
            if (numbers.includes(cur)==false) {
                alert("Phone number can only include numbers or '-' ");
                return;
            }
        }
        if (num.length==0)
        {
            alert("Phone number empty");
            return;
        }
        if (num.length <12)
        {
            alert("Phone number must be 12 characters long!");
            return;
        }
        if(num.length>12)
        {
            alert("Phone number cannot be more than 12 characters long !");
            return;
        }

        if(num.charAt(3)!="-")
        {
                alert("invalid phone number format")
        }


}


function validateCart() {

    var numField = document.getElementById('phno');
    var num = numField.value
    var numbers = ["0","1", "2","3", "4","5", "6", "7","8", "9"];

    for (var i=0; i<num.length; i++) {
        var cur = num.charAt(i);
        if (numbers.includes(cur)==false) {
            alert("Card number can only include numbers separated by spaces");
            return;
        }
    }
}



// HERE, JQuery "LISTENING" starts
$(document).ready(function() {


    $('input').focus(function () {
        $(this).css('background', 'pink');
    });

    $('input').blur(function () {
        $(this).css('background', 'white');
    });

    $('#submit').on('click', function () {
        validatePhone();
        validateCard();
    })



});

