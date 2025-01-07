import express from 'express';
import { flightResultController, getbill, getLocations } from '../controllers/flightController.js';

const router = express.Router();

router.get('/locations', getLocations);
router.get('/search-flights',flightResultController)
router.post('/travel/getbill', getbill);


export default router;
