const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Jenkins CI project!');
});

// Only start the server if this file is run directly
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });
}

module.exports = app; // Important for Jest testing

