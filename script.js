document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const appointmentList = document.getElementById("appointments");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Create a new appointment item and add it to the list
        const appointmentItem = document.createElement("li");
        appointmentItem.innerHTML = `<strong>${name}</strong> (${email}), <strong>${doctor}</strong> - Date: ${date}, Time: ${time}`;
        appointmentList.appendChild(appointmentItem);

        // Clear the form
        form.reset();
    });
});


