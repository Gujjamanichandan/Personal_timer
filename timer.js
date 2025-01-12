"use strict";

$(document).ready(() => {

    $("#progressbar").progressbar({
        value: 0
    });

    // Event listener for the "Start Timer" button click
    $("#start_timer").click(() => {
        let totalTime = $("#time").val();
        let interval = $("#interval").val();
        let isValid = true;
        // Validate the total time input
        if (totalTime == "") {
            $("#time_error").text("This field is required.");
            isValid = false;
        } else if (isNaN(totalTime)) {
            $("#time_error").text("Time must be a number.");
            isValid = false;
        } else {
            $("#time_error").text("");
        }

        // Validate the interval input
        if (interval == "") {
            $("#interval_error").text("This field is required.");
            isValid = false;
        } else if (isNaN(interval)) {
            $("#interval_error").text("Interval must be a number.");
            isValid = false;
        } else {
            $("#interval_error").text("");
        }

        // If both inputs are valid, proceed with the timer
        if (isValid) {
            // Convert time and interval to milliseconds
            totalTime = totalTime * 1000;
            interval = interval * 1000;
            let elapsedTime = 0;

            // Reset progress bar to 0 before starting the timer
            $("#progressbar").progressbar({
                value: 0
            });

            // Set up a timer interval to update the progress bar
            let timer = setInterval(() => {
                elapsedTime += interval;
                const progressValue = (elapsedTime / totalTime) * 100;

                // Update the progress bar value
                $("#progressbar").progressbar("value", progressValue);

                // Check if the total time has elapsed, and if so, stop the timer
                if (elapsedTime >= totalTime) {
                    clearInterval(timer);
                    $("#complete span").text("Time is up!");
                }
            }, interval);
        }
    });

    // Set focus on the total time input field when the page loads
    $("#time").focus();
});
