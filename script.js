//  create a schedule I open the planner the current day is displayed at the top of the calendar
var date = $('#currentDay');
function currentDate(){
    var dateOne = moment();
    date.text(dateOne.format("dddd, MMM YYYY"));
}
currentDate();



// timeblocks have standard business hours. the timeblocks for that day then each timeblock is color coded to indicate whether it is in the past, present, or future
// var currentTime = moment().format('LT');
// if(currentTime ===){

// }
function currentTime() {
    var time = moment().hours()
    console.log(current);
    var hour = $('.hour');

    //    console.log(current);

    // time.each(function () {
    //   var hour = parseInt($(this).attr('id'))

    // //  console.log(hour);

    //   if (hour === current) {
    //     $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
    // //    console.log(('present' + hour + current))
    //   } else if (current > hour) {
    //     $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
    // //    console.log(('past' + hour + current))
    //   } else {
    //     $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
    // //    console.log(('future' + hour + current))
    //   }
    // })
  }
  currentTime()


// when I click into a timeblock I can enter an event



//  I click the save button for that timeblock the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist