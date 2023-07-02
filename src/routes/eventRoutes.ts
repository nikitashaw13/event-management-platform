
const express=require('express');
import * as eventController from '../controllers/eventController';

const router = express.Router();

router.post('/events/add', eventController.addEvent);
router.put('/events/update/:id', eventController.updateEvent);
router.delete('/events/delete/:id', eventController.deleteEvent);
router.get('/events/:id', eventController.getEventById);
router.get('/events', eventController.listEvents);

export default router;
