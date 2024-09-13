const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // To serve static files like HTML, CSS

// Contact form route
app.post("/submit-form", (req, res) => {
    const { name, email, message } = req.body;

    // Process the form data (e.g., store in a database, send an email, etc.)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    res.send("Form submitted successfully!");
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
