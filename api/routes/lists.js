const express = require("express");
const router = express.Router();
const verify = require("../verifyToken");

const bodyParser = require("body-parser");
router.use(bodyParser.json()); // for parsing application/json

// database
require("../connection/database");

// movie Schema and models
const List = require("../modules/List");

// create list
router.post("/", verify, async (req, res) => {
  const body = req.body;
  if (req.user.isAdmin) {
    const newList = new List(body);
    try {
      const result = await newList.save();
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    return res.status(401).json("You are not allowed to create new list");
  }
});

// update userListr
router.put("/update/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const result = await List.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    return res.status(401).json("You are not allowed to update other list");
  }
});

// get user acccording to id

router.get("/find/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const result = await List.findById(req.params.id);
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    return res.status(401).json("You are not allowed to get other list");
  }
});

// delete list
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const result = await List.findByIdAndDelete(req.params.id);
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    return res.status(401).json("You are not allowed to delete new list");
  }
});

// get all list of movies  according to query
router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.types;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { types: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { types: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
