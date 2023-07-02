// index.ts
const express = require('express');
const bodyParser = require('body-parser');
import eventRoutes from './routes/eventRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', eventRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
