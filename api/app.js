const express = require("express");
const app = express();
const dotenv = require("dotenv");

// router
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

// dot env
dotenv.config({ path: "./config.env" });

// port no
const PORT = process.env.PORT;
// cooki-parser for json webtoken
const cookieparser = require("cookie-parser");
app.use(cookieparser());


// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(PORT, () => {
  console.log(`Port no : ${PORT}`);
});
