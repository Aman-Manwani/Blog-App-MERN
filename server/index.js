const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');
const DBConnection = require('./database/db');

const app = express();

dotenv.config();

app.use(express.json())
app.use(cors());

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

DBConnection(USERNAME,PASSWORD);

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log('successfully connected to the database');
})


