document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Extract form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
