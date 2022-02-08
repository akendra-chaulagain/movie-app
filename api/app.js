const express = require("express")
const app = express();
const dotenv = require("dotenv")

// router
const authRoute = require("./routes/auth")

// dot env 
dotenv.config({ path: "./config.env" })

// port no
const PORT = process.env.PORT;

// routes
app.use("/api/auth", authRoute)



app.listen(PORT, () => {
    console.log(`Port no : ${PORT}`);
})