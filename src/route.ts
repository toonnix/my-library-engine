import { Router } from 'express';
import BooksController from './controllers/books'
import SeriesController from './controllers/series';
import GenresController from './controllers/genres';

const router = Router();

router.get('/books', BooksController.findAll);
router.get('/books/:id', BooksController.findById);
router.post('/books', BooksController.addBook);
router.post('/books/:id/series', BooksController.assignToSeries);
router.post('/books/:id/genres', BooksController.assignGenres);

router.get('/series', SeriesController.findAll);
router.get('/series/:id', SeriesController.findById);
router.post('/series', SeriesController.create);

router.get('/genres', GenresController.findAll);
router.get('/genres/:id', GenresController.findById);
router.post('/genres', GenresController.create);

module.exports = router;
