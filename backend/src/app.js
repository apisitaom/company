const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4003

const addressformRoute = require('./routes/addressform');
const addresspresentRoute = require('./routes/addresspresent');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
    
    const mongoURI = 'mongodb://localhost:27017/company'
    
    mongoose
    .connect(
        mongoURI,{useNewUrlParser : true}
        ).then(() => console.log('CONNECTED DATABASE SUCCESS'))
        .catch(err => console.log('DATABASE ERROR !!!'))
        
app.use((req, res, next) => {
    console.log(`Server on path ${req.ip} ${req.method} ${req.path}`)
    next();
});

app.use('/addressform', addressformRoute);
app.use('/addresspresent', addresspresentRoute);

app.use('/images', express.static(path.join(__dirname + '/../public/images')));

app.get('/', (req, res) => {
    res.json({ info : `COMPANY WELCOME` });
});

app.listen(port, () => {
    console.log(`Server on Port: ${port}`);
});