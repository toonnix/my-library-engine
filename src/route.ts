import { Router } from 'express';
import BooksController from './controllers/books'
import BooksSeriesController from './controllers/booksSeries';
import GenresController from './controllers/genres';

const router = Router();

router.get('/books', BooksController.findAll);
router.post('/books', BooksController.addBook);

router.get('/booksSeries', BooksSeriesController.findAll);

router.get('/genres', GenresController.findAll);
router.post('/genres', GenresController.addGenre);

module.exports = router;
