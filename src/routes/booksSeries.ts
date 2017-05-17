import { Router } from 'express';
import BooksSeriesController from '../controllers/booksSeries'

const router = Router();

router.get('/booksSeries', BooksSeriesController.findAll);

module.exports = router;
