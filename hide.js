$(document).ready(function() {
    // Hide the "Hide Appointments" button initially
    $("#hide-appointments-button").hide();

    // Add a click event handler to the "Show Appointments" button
    $("#show-appointments-button").click(function() {
        $("#appointment-list").slideDown(); // Show the section with a slide-down animation
        $(this).hide(); // Hide the "Show Appointments" button
        $("#hide-appointments-button").show(); // Show the "Hide Appointments" button
    });

    // Add a click event handler to the "Hide Appointments" button
    $("#hide-appointments-button").click(function() {
        $("#appointment-list").slideUp(); // Hide the section with a slide-up animation
        $(this).hide(); // Hide the "Hide Appointments" button
        $("#show-appointments-button").show(); // Show the "Show Appointments" button
    });
});