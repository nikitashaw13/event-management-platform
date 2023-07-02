# Event Management Platform

The Event Management Platform is a web application that allows an event-organizing company to manage their events. This platform provides APIs to add, update, delete, retrieve, and list events. It is implemented using Node.js and TypeScript, and the API is deployed on Vercel at https://event-management-platform-theta.vercel.app/.

## Approach

The Event Management Platform is designed to handle basic event management operations. The platform utilizes a Node.js backend with TypeScript for strong type checking and enhanced developer experience. The data structure used to represent events is a TypeScript interface called `Event`, which includes properties like `id`, `eventName`, `eventDate`, `organizer`, `email`, `phone`, `location`, `createdAt`, and `updatedAt`. The `id` property serves as a unique identifier for each event, ensuring efficient retrieval and manipulation of event data.

## Data Structure

The `Event` object has the following structure:

```typescript
{
  "id": "string",
  "eventName": "string",
  "eventDate": "Date",
  "organizer": "string",
  "email": "string",
  "phone": "string",
  "location": {
    "street": "string",
    "city": "string",
    "state": "string",
    "zip": "string"
  },
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Instructions

To run the Event Management Platform locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/event-management-platform.git
   ```
   Replace `your-username` with your GitHub username.

2. Navigate to the project directory:
   ```bash
   cd event-management-platform
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. The server will be running at `http://localhost:3000`. You can use API clients like Postman to interact with the endpoints.

## Endpoints

The Event Management Platform provides the following API endpoints:

1. **Add a new event**

   - **URL**: `POST /api/events`
   - **Request body**:
   ```json
   {
     "eventName": "Event Name",
     "eventDate": "2023-07-15",
     "organizer": "John Doe",
     "email": "john@example.com",
     "phone": "123-456-7890",
     "location": {
       "street": "123 Main St",
       "city": "New York",
       "state": "NY",
       "zip": "10001"
     }
   }
   ```

2. **Update an existing event**

   - **URL**: `PUT /api/events/:id`

3. **Delete an event**

   - **URL**: `DELETE /api/events/:id`

4. **Retrieve an event by its ID**

   - **URL**: `GET /api/events/:id`
   - **Response**:
   ```json
   {
     "id": "event-id",
     "eventName": "Event Name",
     "eventDate": "2023-07-15",
     "organizer": "John Doe",
     "email": "john@example.com",
     "phone": "123-456-7890",
     "location": {
       "street": "123 Main St",
       "city": "New York",
       "state": "NY",
       "zip": "10001"
     },
     "createdAt": "timestamp",
     "updatedAt": "timestamp"
   }
   ```

5. **List all events with optional filters**

   - **URL**: `GET /api/events`
   - **Query Parameters**:
     - `organizer`: Filter events by the organizer's name (case-insensitive).
     - `eventName`: Filter events by the event name (case-insensitive).
     - `eventDate`: Filter events by the event date (format: `YYYY-MM-DD`).
     - `phone`: Filter events by phone number (case-insensitive).
     - `email`: Filter events by email (case-insensitive).
   - **Response**:
   ```json
   [
     {
       "id": "event-id",
       "eventName": "Event Name",
       "eventDate": "2023-07-15",
       "organizer": "John Doe",
       "email": "john@example.com",
       "phone": "123-456-7890",
       "location": {
         "street": "123 Main St",
         "city": "New York",
         "state": "NY",
         "zip": "10001"
       },
       "createdAt": "timestamp",
       "updatedAt": "timestamp"
     },
     // More events...
   ]
   ```
