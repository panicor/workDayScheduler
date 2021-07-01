$(document).ready(function () {
//saves save button
var save = $(".saveBtn")

//on click of save button, do this
save.on("click", function () {
    //gets description
var time = $(this).siblings(".description").val().trim();
//gets hour ids
var hour = $(this).parent().attr("id");

//local storage message
var message = $("#msg");
message.text("Saved to local storage");

//saves to local storage
localStorage.setItem("description", time);
localStorage.setItem("hour", hour);

//hour.appendChild(localSt);
//$(this).attr("id").appendChild(time);

})
//evaluation function
function eval (){
    //gets current hour
   var currentH = moment().hour(); 
//gets class values
   var blocks = $(".time-block");

   //for each block, compare
   blocks.each(function () {

    //each hour, compare
    for (let i = 9; i <=17; i++){
        //gets hour id
    var hourH = $(this).attr("id");
    //takes "hour" out of id name
    var compH = parseInt(hourH.replace("hour", ""));

    //compares hours
   if (currentH > compH){
       //sets color
    $(this).addClass("past");
   }
else if (currentH === compH) {
    $(this).removeClass("past");
    $(this).addClass("present");
}
else{
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
}}
   })

} 

eval();
//sets date with moment
function setDate (){
    var now = moment().format("MMM Do, YYYY");
    var day = $("#currentDay");
    day.text(now);
    }

    setDate();

//keeps data in on refresh
$("#hour9 .description").val(localStorage.getItem("description"));
$("#hour10 .description").val(localStorage.getItem("description"));
$("#hour11 .description").val(localStorage.getItem("description"));
$("#hour12 .description").val(localStorage.getItem("description"));
$("#hour13 .description").val(localStorage.getItem("description"));
$("#hour14 .description").val(localStorage.getItem("description"));
$("#hour15 .description").val(localStorage.getItem("description"));
$("#hour16 .description").val(localStorage.getItem("description"));
$("#hour17 .description").val(localStorage.getItem("description"));


//$(this).attr("id").val(localStorage.getItem("description"));

})




































