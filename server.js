const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
console.log(`Server listening on: http://localhost:${PORT}`);
  });







