function validatePhone() {

    var numField = document.getElementById('phno');
    var num = numField.value
    var numbers = ["0","1", "2","3", "4","5", "6", "7","8", "9", "-"];
    var names = document.getElementById("name").value;
    validateCart();
    if(names.length<=0)
        alert("Name cannot be empty !")

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
    if(num.charAt(7)!="-")
    {
        alert("invalid phone number format")
    }

}
function validateCart() {
    var numField = document.getElementById('card');
    var num = numField.value
    var numbers = ["0","1", "2","3", "4","5", "6", "7","8", "9", " "];

    if (num.length==0)
    {
        alert("Credit card number empty");
        return;
    }
    if (num.length <19)
    {
        alert("Card number must be 19 characters long including spaces!");
        return;
    }
    if(num.length>19)
    {
        alert("Card number cannot be more than 19 characters long including spaces!");
        return;
    }
    for (var i=0; i<num.length; i++) {
        var cur = num.charAt(i);

        if (numbers.includes(cur)==false) {
            alert("Card number can only include numbers separated by spaces");
            return;
        }
    }
    if(num.charAt(4)!=" ")
    {
        alert("invalid phone number format")
    }
    if(num.charAt(9)!=" ")
    {
        alert("invalid phone number format")
    }
    if(num.charAt(14)!=" ")
    {
        alert("invalid phone number format")
    }

}



// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)

const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
  var expert=  $('select#expert').val()


    if (expert=="Ramona Flowers" &&( date.getDay()==2 || date.getDay()==3))
    {
        return [false];
    }
    if (expert=="Beck" && date.getDay()==4)
    {
        return [false];
    }
    if (expert=="Michael Cera" && date.getDay()==1)
    {
        return [false];
    }

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ true ];
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function() {

    const pay = $('input#card');
    pay.on('mouseenter', function () {
        $('p#caution').removeClass('hidden');
    });
    pay.on('mouseleave', function () {
        $('p#caution').addClass('hidden');
    });


    $('input').focus(function () {
        $(this).css('background', 'pink');
    });

    $('input').blur(function () {
        $(this).css('background', 'white');
    });

    $('#submit').on('click', function () {
        validatePhone()
    })
    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );



});

