// detect current time function 
$(document).ready(function(){
    // create a var to call the id 
    var currentDateEl = $("#currentDay");
    // create a var to detect the current date
    var curDate = moment().format('MMMM Do YYYY');
    currentDateEl.text(curDate);
});
// function to save input from text area 
$(".saveBtn").click(function(){
    // var to target the text area for each specific time block
    var textValue=$(this.parentNode.children[1]).val();
    // code to save the text area items in local storage 
    localStorage.setItem($(this).attr("id"),textValue);
});
// function to color code each time block 
$(document).ready(function(){
    var currentTime= moment().hours();
    console.log(currentTime);
    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id"));

     console.log(blockHour);
      // check if we've moved past this time
      if (blockHour < currentTime) {
        $(this).addClass("past");
      } 
      //check if its the current time
      else if (blockHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      // check if its future time block
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
});
