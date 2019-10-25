//configures the file to use dotenv and imports mongoose
require('dotenv').config()
const mongoose = require("mongoose");
//connects to your mongoDB database through mongoose using that db_connection_string that is defined in your .env file
mongoose.connect(process.env.db_connection_string).then(connection => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.log(error.message);
});