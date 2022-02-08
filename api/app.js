const express = require("express")
const app = express();
const dotenv = require("dotenv")

// router
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")

// dot env 
dotenv.config({ path: "./config.env" })

// port no
const PORT = process.env.PORT;

// routes
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)



app.listen(PORT, () => {
    console.log(`Port no : ${PORT}`);
})