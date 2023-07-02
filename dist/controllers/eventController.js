"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEvents = exports.getEventById = exports.deleteEvent = exports.updateEvent = exports.addEvent = void 0;
let events = [];
const addEvent = (req, res) => {
    const event = req.body;
    event.id = uuidv4();
    event.createdAt = new Date();
    event.updatedAt = new Date();
    events.push(event);
    res.status(201).json(event);
};
exports.addEvent = addEvent;
const updateEvent = (req, res) => {
    const id = req.params.id;
    const eventIndex = events.findIndex((event) => event.id === id);
    if (eventIndex === -1) {
        res.status(404).json({ error: 'Event not found' });
    }
    else {
        const updatedEvent = Object.assign(Object.assign(Object.assign({}, events[eventIndex]), req.body), { updatedAt: new Date() });
        events[eventIndex] = updatedEvent;
        res.json(updatedEvent);
    }
};
exports.updateEvent = updateEvent;
const deleteEvent = (req, res) => {
    const id = req.params.id;
    const eventIndex = events.findIndex((event) => event.id === id);
    if (eventIndex === -1) {
        res.status(404).json({ error: 'Event not found' });
    }
    else {
        events.splice(eventIndex, 1);
        res.sendStatus(204);
    }
};
exports.deleteEvent = deleteEvent;
const getEventById = (req, res) => {
    const id = req.params.id;
    const event = events.find((event) => event.id === id);
    if (!event) {
        res.status(404).json({ error: 'Event not found' });
    }
    else {
        res.json(event);
    }
};
exports.getEventById = getEventById;
const listEvents = (req, res) => {
    // Optional filters (if needed)
    const filteredEvents = events;
    res.json(filteredEvents);
};
exports.listEvents = listEvents;
function uuidv4() {
    throw new Error('Function not implemented.');
}
