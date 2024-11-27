const express = require("express");
const app = express();

// Basic route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to IT Grashorn</title>
        <!-- Bootstrap CSS CDN -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      </head>
      <body class="bg-light">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">IT Grashorn</a>
          </div>
        </nav>
        <div class="container text-center my-5">
          <h1 class="display-4">Welcome to IT Grashorns Docker example!</h1>
          <p class="lead">Your partner for tailored IT solutions and consulting.</p>
          <a 
            href="https://it-grashorn.de" 
            class="btn btn-primary btn-lg mt-3"
            target="_blank"
            rel="noopener noreferrer">
            Visit our Website
          </a>
        </div>
        <footer class="bg-dark text-white py-3">
          <div class="container text-center">
            <small>&copy; 2024 IT Spezialist Grashorn. All rights reserved.</small>
          </div>
        </footer>
      </body>
    </html>
  `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
