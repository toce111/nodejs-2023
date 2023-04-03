const mongoose = require('mongoose');

const Movie = mongoose.movie(
    'movie',
    {
        title: String,
        year: Number
    },
    'movies'
);

const create = async (data) => {
    let movie = new Movie(data);
    return movie.save();
};

const getAll = async () => {
    return Movie.find({});
};

const getOne = async (id) => {
    return Movie.findOne({_id: id});
};

const updateOne = async (id, data) => {
    return Movie.updateOne({_id: id}, data)
};


module.exports = {
    title,
    create,
    getAll,
    getOne,
    updateOne
}