"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEvents = exports.getEventById = exports.deleteEvent = exports.updateEvent = exports.addEvent = void 0;
const uuid_1 = require("uuid");
let events = [];
const addEvent = (req, res) => {
    try {
        const event = req.body;
        const { eventName, eventDate, organizer, phone, email } = event;
        if (!eventName || !eventDate || !organizer)
            throw "Event creation not possible without name,date or organizers name";
        if (!phone && !email)
            throw "Either phone or email is required";
        event.id = (0, uuid_1.v4)();
        event.createdAt = new Date();
        event.updatedAt = new Date();
        events.push(event);
        res.status(201).json(event);
    }
    catch (error) {
        res.json({ error });
    }
};
exports.addEvent = addEvent;
const updateEvent = (req, res) => {
    try {
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
    }
    catch (error) {
        res.json({ error });
    }
};
exports.updateEvent = updateEvent;
const deleteEvent = (req, res) => {
    try {
        const id = req.params.id;
        const eventIndex = events.findIndex((event) => event.id === id);
        if (eventIndex === -1) {
            res.status(404).json({ error: 'Event not found' });
        }
        else {
            events.splice(eventIndex, 1);
            res.sendStatus(204);
        }
    }
    catch (error) {
        res.json({ error });
    }
};
exports.deleteEvent = deleteEvent;
const getEventById = (req, res) => {
    try {
        const id = req.params.id;
        const event = events.find((event) => event.id === id);
        if (!event) {
            res.status(404).json({ error: 'Event not found' });
        }
        else {
            res.json(event);
        }
    }
    catch (error) {
        res.json({ error });
    }
};
exports.getEventById = getEventById;
const listEvents = (req, res) => {
    try {
        const { organizer, eventName, eventDate, email, phone } = req.query;
        let filteredEvents = events;
        if (organizer) {
            const organizerString = Array.isArray(organizer) ? organizer[0].toString() : organizer.toString();
            filteredEvents = filteredEvents.filter((event) => event.organizer.toLowerCase().includes(organizerString.toLowerCase()));
        }
        if (eventName) {
            const eventNameString = Array.isArray(eventName) ? eventName[0].toString() : eventName.toString();
            filteredEvents = filteredEvents.filter((event) => event.eventName.toLowerCase().includes(eventNameString.toLowerCase()));
        }
        if (eventDate) {
            const eventDateString = Array.isArray(eventDate) ? eventDate[0].toString() : eventDate.toString();
            filteredEvents = filteredEvents.filter((event) => new Date(event.eventDate).toDateString() === new Date(eventDateString).toDateString());
        }
        if (email) {
            const emailString = Array.isArray(email) ? email[0].toString() : email.toString();
            filteredEvents = filteredEvents.filter((event) => new Date(event.email).toDateString() === new Date(emailString).toDateString());
        }
        if (phone) {
            const phoneString = Array.isArray(phone) ? phone[0].toString() : phone.toString();
            filteredEvents = filteredEvents.filter((event) => new Date(event.phone).toDateString() === new Date(phoneString).toDateString());
        }
        res.json(filteredEvents);
    }
    catch (error) {
        res.json({ error });
    }
};
exports.listEvents = listEvents;
//# sourceMappingURL=eventController.js.map