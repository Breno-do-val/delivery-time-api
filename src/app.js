require('dotenv').config();

const express = require('express');
const app = express();

app.listen(process.env.API_PORT, () => {
    console.log(`Server listening on port ${process.env.API_PORT}`);
});

