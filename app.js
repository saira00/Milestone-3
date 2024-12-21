var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collecting form values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var education = document.getElementById('education').value.trim();
    var experience = document.getElementById('experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    // Constructing Resume HTML
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // Updating resume display and showing success message
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        alert("Resume submitted successfully!");
        console.log("Resume Details:");
        console.log("Name: ".concat(name));
        console.log("Email: ".concat(email));
        console.log("Phone: ".concat(phone));
        console.log("Education: ".concat(education));
        console.log("Experience: ".concat(experience));
        console.log("Skills: ".concat(skills));
    }
    else {
        console.error('The resume display element is missing.');
    }
});
