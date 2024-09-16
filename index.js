// index.js

const express = require('express');
const app = express();
const port = 3000;


app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
    res.render("index.html");
  });
// Simple GET route to add two numbers
app.get('/add', function (req, res) {
    // Get 'num1' and 'num2' from query parameters
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ message: "Invalid numbers provided." });
    }

    const sum = num1 + num2;
    let responce = { data: sum, message: "Success", statusCode: 200 };
    res.json(responce);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



