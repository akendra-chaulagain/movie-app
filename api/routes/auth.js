
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

const bodyParser = require('body-parser')
router.use(bodyParser.json()) // for parsing application/json


router.get("/", (req, res) => {
    res.send("hello from Router")
})

// database
require("../connection/database")

// usere schema and models
const User = require("../modules/User")


// register user data

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.status(500).json("enter all the data")
    }
    try {
        // if temail already exist in database then this statement will run
        const userEmail = await User.findOne({ email })
        if (userEmail) {
            return res.status(500).json("Email already exist. Please enter new email")
        }
        // if email is new then this will run
        const user = new User({ username, email, password })
        // generate salt to hash password
        const salt = await bcrypt.genSalt(12);
        // now we set user password to hashed password
        user.password = await bcrypt.hash(user.password, salt);
        const result = await user.save();
        return res.status(200).json(result)

    } catch (error) {
        console.log(error);
    }
})


// login user
router.post("/login", async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findOne({ email: body.email })
        if (user) {
            // check user password with hashed password stored in the database
            const validPassword = await bcrypt.compare(body.password, user.password);
            if (validPassword) {
                res.status(400).json(user)
            } else {
                res.status(400).json("Invalid Data")
            }
        } else {
            res.status(400).json("Invalid Data")
        }
    } catch (error) {
        res.status(400).json("User does not exist")

    }

})




module.exports = router;