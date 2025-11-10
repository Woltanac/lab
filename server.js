const express = require('express');
const app = express();
// Use the port provided by Render's environment variable, or default to 3000 for local development
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Render! This is my Node.js website.');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
