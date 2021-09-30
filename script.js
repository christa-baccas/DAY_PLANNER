//  create a schedule I open the planner the current day is displayed at the top of the calendar
var date = $('#currentDay');
function currentDate(){
    var dateOne = moment();
    date.text(dateOne.format("dddd, MMM YYYY"));
}
currentDate();

// timeblocks have standard business hours. the timeblocks for that day then each timeblock is color coded to indicate whether it is in the past, present, or future


// var int = parseInt($('#id').text());
// console.log(int);


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
        // var row = $('.row');
        // console.log(row);
    })

  }

 displayTime()

//  I click the save button for that timeblock the text for that event is saved in local storage


// if i enter data in textarea when i click save data is store in local storage


var textArea = $('.col-8');
var userInput = textArea.val();

function storeUserInput(event){
    event.preventDefault();

    var userInput = textArea.val();
    console.log(userInput);
}









// WHEN I refresh the page the saved events persist