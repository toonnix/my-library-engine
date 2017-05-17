import { Router } from 'express';
import GenresController from '../controllers/genres';

const router = Router();

router.get('/genres', GenresController.findAll);
router.post('/genres', GenresController.addGenre);

module.exports = router;
