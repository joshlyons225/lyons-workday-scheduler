// today's date global var 
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

// saveBtn function
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        console.log("button clicked");

        // create var def for time
        var time = $(this).parent().attr("id");

        // create var def for task description
        var task = $(this).siblings(".description").val();

        // add to localStorage
        localStorage.setItem(JSON.stringify(time, task));
    })

    // create loadTasks function to check from localStorage
    var loadTasks = function() {
        tasks = JSON.parse(localStorage.getItem(time, task));
    }

    // retrieve current time
    var currentTime = moment().hour();
    console.log(currentTime);
    
    // create function to loop and assign past, present, future classes



    // callbacks
    loadTasks();
})