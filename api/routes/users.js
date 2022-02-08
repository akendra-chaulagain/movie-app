

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
            }, { new: true })
            res.status(200).json(updatedUser)

        } catch (error) {
            res.status(500).json(error)
        }

    } else {
        res.status(403).json("you can update only your data")
    }

})


// delete user
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {

            const deleteUser = await User.findByIdAndDelete(req.params.id)
            res.status(200).json(deleteUser)

        } catch (error) {
            res.status(500).json(error)
        }

    } else {
        res.status(403).json("you can delete only your data")
    }

})


// get singlw user by id
router.get("/find/:id", async (req, res) => {
    try {

        const getUser = await User.findById(req.params.id)
        const { password, ...others } = getUser._doc;
        res.status(200).json({ others });

    } catch (error) {
        res.status(500).json("unable to get user")
    }

})

// get all data
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


// user data in year (user ststs)
router.get("/stats", async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1)

    const monthArrey = [
        "January",
        "Feburary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            }, {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                },
            },
        ]);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)

    }


})


module.exports = router;