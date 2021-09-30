//  create a schedule I open the planner the current day is displayed at the top of the calendar
var date = $('#currentDay');
function currentDate(){
    var dateOne = moment();
    date.text(dateOne.format("dddd, MMM YYYY"));
}
currentDate();

// timeblocks have standard business hours. the timeblocks for that day then each timeblock is color coded to indicate whether it is in the past, present, or future


// var int = parseInt($('#item').text());
// console.log(int);


function displayTime() {
    //displays hours in military time
    var current = moment().hours()
    var times = $('.time-block');

    //    console.log(current);
    //    console.log(times);


  }
//   currentTime()

//  I click the save button for that timeblock the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist