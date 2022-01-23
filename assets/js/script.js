// today's date global var 
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

// saveBtn function
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        console.log("button clicked");
    })
})