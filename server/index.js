const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');
const DBConnection = require('./database/db');
const bodyParser = require('body-parser')

const app = express();

dotenv.config();

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const router = require('./routes/route.js')

app.use('/',router);

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

DBConnection(USERNAME,PASSWORD);

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log('server made success');
})


