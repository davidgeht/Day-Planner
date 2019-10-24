// detect current time function 
$(document).ready(function(){
    // create a var to call the id 
    var currentDateEl = $("#currentDay");
    // create a var to detect the current date
    var curDate = moment().format('MMMM Do YYYY');
    currentDateEl.text(curDate);
});
// textbox intializer
var schedArray = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
for (var i = 0; i < schedArray.length; i++){
       $(".container").append(`<div class="row time-block" id=block${schedArray[i]}><div class="col-2 hour" id=${schedArray[i]}hour><p>${schedArray[i]}</p></div> 
       <textarea class="col-8 description" id=desc${schedArray[i]}></textarea><button class="col-2 saveBtn i far fa-save" id=btn${schedArray[i]}> </i></button></div>`);
};   
// function to save input from text area 
$(".saveBtn").click(function(){
    var textValue=$(this.parentNode.children[1]).val();
    localStorage.setItem($(this).attr("id"),textValue);
});

