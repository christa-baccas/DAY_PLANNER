var date = $('#currentDay');
var saveBtn = $(".saveBtn");
var textArea = $('.col-8');


//  create a schedule I open the planner the current day is displayed at the top of the calendar
function currentDate(){
    var dateOne = moment();
    date.text(dateOne.format("dddd, MMM YYYY"));
}
currentDate();

// timeblocks have standard business hours. the timeblocks for that day then each timeblock is color coded to indicate whether it is in the past, present, or future


function displayTime() {
    //displays hours in military time
    var current = moment().hours()
        //    console.log(current);
    var times = $('.time-block');
        //    console.log(times);
    times.each(function(){
        //loops through each id attribute
        var int = parseInt($(this).attr('id'));
        // console.log(`Id value ${int}`);

        if(current === int){
            $(this).children('.col-8').attr('class', 'col-8 present');
        }else if(current > int){
            $(this).children('.col-8').attr('class', 'col-8 past');
        }else{
            $(this).children('.col-8').attr('class', 'col-8 future');
        }

    })

  }

 displayTime()

// save button that stores date located in the textarea
saveBtn.click(function (event) {
    event.preventDefault;
    
    // val() method is used to get the values from textarea and stored in txt variable
    // console.log($(this));
    var enteredTxt = $(this).siblings('.col-8').val();
    // console.log(enteredTxt);
    var storedData = $(this).parent().attr('id');
    // console.log(storedData);
    localStorage.setItem(storedData, enteredTxt);
});


// a loop thourgh to get the stored data to be on the textare on refresh
textArea.each(function(){

    var storedData = $(this).parent().attr('id');
    // console.log(storedData);
    // console.log(localStorage.getItem(storedData));
    var showTxt = localStorage.getItem(storedData);
    $(this).val(showTxt);
});

