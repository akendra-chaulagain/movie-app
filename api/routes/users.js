

const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const verify = require("../verifyToken")

const bodyParser = require('body-parser')
router.use(bodyParser.json()) // for parsing application/json



router.get("/", (req, res) => {
    res.send("hello from Router user ")
})

// database
require("../connection/database")

// usere schema and models
const User = require("../modules/User")



// update user
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }

            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{new:true})
            res.status(200).json(updatedUser)

        } catch (error) {
            res.status(500).json(error)
        }

    } else {
        res.status(403).json("you can update only your data")
    }


})




module.exports = router;