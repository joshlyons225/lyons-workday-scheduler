// today's date global var 
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

// saveBtn function
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        console.log("button clicked");

        // create var def for time
        // create var def for task description

        // add to localStorage
        localStorage.setItem(JSON.stringify(time, task));
    })

    // create loadTasks function to check from localStorage

    // retrieve current time
    var currentTime = moment().hour();
    console.log(currentTime);
    
    // create function to loop and assign past, present, future classes
})