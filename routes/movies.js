const movieRouter = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateCreateMovie, validateMovieDelete } = require('../validate/validator');

movieRouter.get('/', getMovies);
movieRouter.post('/', validateCreateMovie, createMovie);
movieRouter.delete('/:id', validateMovieDelete, deleteMovie);

module.exports = movieRouter;
