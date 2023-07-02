
const express=require('express');
import * as eventController from '../controllers/eventController';

const router = express.Router();

router.post('/events', eventController.addEvent);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);
router.get('/events/:id', eventController.getEventById);
router.get('/events', eventController.listEvents);

export default router;
