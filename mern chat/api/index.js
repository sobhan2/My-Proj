const express = require('express')

const app = express();

const dotenv = require('dotenv');


dotenv.config();
console.log(process.env.MONGO_ENV)
app.get('/test', (req,res) => {
    res.json('test ok')
});

app.post('/register', (req,res) => {

});

app.listen(4040);