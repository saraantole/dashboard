const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./db');
const memberRouter = require('./db/routes/member.router');
const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = { origin: 'http://localhost:3000'};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', memberRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
