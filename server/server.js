const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Issue = require('./models/issue');
const dbConfig = require('./config/database');
const router = require('./routes/issue/index');

const express = require('express');
const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

mongoose.connect(dbConfig.mongodb, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
    console.log("Connected to MongoDB");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});