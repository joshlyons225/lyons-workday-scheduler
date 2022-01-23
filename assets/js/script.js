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

        // retrieve saved data for all hours from localStorage
        $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    }

    // function to set appropriate time naming conventions
    var timeClassUpdate = function() {

        // retrieve current time
        var currentTime = moment().hour();
        console.log(currentTime);
    
        // create function to loop and assign past, present, future classes
        $(".time-block").each(function() {
            var tense = parseInt($(this).attr("id").split("hour")[1]);
            
            if (tense < currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            } else if (tense === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // callbacks
    loadTasks();
    timeClassUpdate();
})