const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.send("<h1>Climate Crisis Repository</h1><p><a href='https://github.com/YOUR_USERNAME/climate-crisis'>View on GitHub</a></p>");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.send("<h1>Typesetting Repository</h1><p><a href='https://github.com/YOUR_USERNAME/typesetting'>View on GitHub</a></p>");
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.send("<h1>Four Algorithms Repository</h1><p><a href='https://github.com/YOUR_USERNAME/four-algorithms'>View on GitHub</a></p>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
