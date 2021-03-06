
const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    movieusername: { type: String, required: true },
    desc: { type: String },
    img: { type: String },
    year: { type: String },
    duration: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false }

}, { timestamps: true }
)

const Movie = mongoose.model("Movie", MovieSchema)

module.exports = Movie;