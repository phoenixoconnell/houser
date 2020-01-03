require('dotenv').config();
const express = require("express");
const app = express();
const controller = require('./controller')
const massive = require('massive');
const hc = require('./controller');

const { DB_STRING } = process.env;

app.use(express.json());

massive(DB_STRING).then(db => {
    app.set('db', db);
    console.log('DB Connected');
});

app.get('/api/houses', hc.read)
app.post('/api/houses', hc.create)
app.put('/api/houses/id', hc.update)
app.delete('/api/houses/id', hc.delete)

app.listen(5150, () => {
	console.log("Listening on port 5150")
});

