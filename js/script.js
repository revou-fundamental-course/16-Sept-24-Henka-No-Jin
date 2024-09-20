let userName = '';

while (!userName) {
    userName = prompt("Please enter your name:");
    if (!userName) {
        alert("Name cannot be empty! Please enter your name.");
    }
}

document.getElementById('welcome').innerHTML = `Hi ${userName}, Welcome To Website`;

function validateForm() {
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    let message = document.getElementById('messageText').value;

    if (!name || !date || !gender || !message) {
        alert("All fields are required!");
        console.log(name, date, gender, message);
        return false;
    }

    const now = new Date();
    const currentDateTime = now.toLocaleString();

    // Display form data with current time
    document.getElementById('formOutput').innerHTML = `
        <p><strong>Current Time:</strong> ${currentDateTime}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    alert("Data submitted successfully!");

    return false; 
}
