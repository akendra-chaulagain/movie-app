const express = require("express")
const router = express.Router()
const verify = require("../verifyToken")


const bodyParser = require('body-parser')
router.use(bodyParser.json()) // for parsing application/json




// database
require("../connection/database")

// movie Schema and models
const Movie = require("../modules/Movie")


// create movie
router.post("/", verify, async (req, res) => {
    const body = req.body;
    if (req.user.isAdmin) {
        const newMovie = new Movie(body)
        try {
            const result = await newMovie.save();
            return res.status(201).json(result)
        } catch (error) {
            res.status(400).json(error)
        }

    } else {
        return res.status(401).json("You are not allowed to create movie")

    }
})


// update movie

router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            return res.status(201).json(updatedMovie)
        } catch (error) {
            res.status(400).json(error)
        }

    } else {
        return res.status(401).json("You are not allowed to update movie")

    }
})

// delete movie

router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
            return res.status(201).json(deleteMovie)
        } catch (error) {
            res.status(400).json(error)
        }

    } else {
        return res.status(401).json("You are not allowed to delete movie")
    }
})

// get movie
router.get("/find/:id", verify, async (req, res) => {
    try {
        const deleteMovie = await Movie.findById(req.params.id);
        return res.status(201).json(deleteMovie)
    } catch (error) {
        res.status(400).json(error)
    }
})



// get random movie  whrn refresh
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ])
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
            ])
        }
        return res.status(200).json(movie)
    } catch (error) {
        res.status(400).json(error)
    }
})


// get all user
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const getAllMovie = await Movie.find();
            return res.status(201).json(getAllMovie.reverse())
        } catch (error) {
            res.status(400).json(error)
        }

    } else {
        return res.status(401).json("You are not allowed to get all movie")
    }
})


module.exports = router;