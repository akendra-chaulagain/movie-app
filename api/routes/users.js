

const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const verify = require("../verifyToken")

const bodyParser = require('body-parser')
router.use(bodyParser.json()) // for parsing application/json


// database
require("../connection/database")

// usere schema and models
const User = require("../modules/User")



// update user data

router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }

            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(201).json(updateUser)
        } catch (error) {
            res.status(201).json("unable to update")

        }

    } else {
        console.log("you cannot update other account");
    }
})




// delete user

router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id)
            res.status(201).json(deleteUser)
        } catch (error) {
            res.status(201).json("unable to delete")
        }

    } else {
        console.log("you cannot delete other account");
    }
})






// get user according to id


router.get("/find/:id", async (req, res) => {
    try {

        const getUser = await User.findById(req.params.id)
        const { password, ...info } = getUser._doc;
        res.status(200).json(info);

    } catch (error) {
        res.status(500).json("unable to get user")
    }

})

// get all user if we are admin

router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const getallUser = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();
            res.status(200).json(getallUser)

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(500).json("unable to get all users")
    }

})



module.exports = router;