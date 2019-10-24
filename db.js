require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect(process.env.db_connection_string).then(connection => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.log(error.message);
});