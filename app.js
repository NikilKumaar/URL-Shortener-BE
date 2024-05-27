const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${process.env.HOSTNAME}:${process.env.PORT}`);
})

