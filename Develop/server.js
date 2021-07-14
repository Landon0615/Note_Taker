const express = require('express');
const router = require('./routes/htmlRoutes');

const app = express();
app.use('/', router)

const PORT = 8080;

app.listen(PORT, () => {
console.log(`Server listening on: http://localhost:${PORT}`);
  });