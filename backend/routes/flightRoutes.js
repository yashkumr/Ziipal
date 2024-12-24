import express from 'express';
import { flightResultController, getLocations } from '../controllers/flightController.js';

const router = express.Router();

router.get('/locations', getLocations);
router.get('/search-flights',flightResultController)


export default router;
