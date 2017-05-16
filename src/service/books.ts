import db from '../model/db';
import { Router } from 'express';
import Books from '../model/books'

const router = Router();

router.get('/books', Books.getAll);
router.post('/books', Books.addBook);
router.get('/books/:id', Books.getById);

module.exports = router;
