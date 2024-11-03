const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const costsRoutes = require('./routes/costs');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/costs', costsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});