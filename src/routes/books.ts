import { Router } from 'express';
import BooksController from '../controllers/books'

const router = Router();

router.get('/books', BooksController.findAll);
router.post('/books', BooksController.addBook);

module.exports = router;
