const mongoose = require("mongoose")
const dotenv = require("dotenv")
// dot env 
dotenv.config({ path: "./config.env" })

mongoose.connect(process.env.DATAbase)
    .then(() => {
        console.log("connected to database");
    }).catch((err) => {
        console.log(`database error ${err}`);
    })