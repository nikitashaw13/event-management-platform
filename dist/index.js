"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express = require('express');
const bodyParser = require('body-parser');
const eventRoutes_1 = require("./routes/eventRoutes");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use('/api', eventRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
