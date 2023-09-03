# Server README

This README provides an overview of the server code and its configuration. The server is built using Node.js and the Express framework and includes various middleware for handling requests and errors. It also connects to a MongoDB database and defines API routes for authentication and OpenAI integration.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Middleware](#middleware)
- [API Routes](#api-routes)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)

## Prerequisites

Before running the server, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

1. Clone this repository to your local machine.

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root directory and define the necessary environment variables (see [Environment Variables](#environment-variables) section).

## Project Structure

The server project is organized as follows:

- `config/db.js`: Handles the MongoDB connection.
- `middelwares/errorMiddleware.js`: Custom error handling middleware.
- `routes/authRoutes.js`: Authentication-related API routes.
- `routes/openaiRoutes.js`: API routes for OpenAI integration.
- `index.js`: Entry point of the server application.

## Middleware

- **cors**: Enables Cross-Origin Resource Sharing (CORS) for the server.
- **express.json()**: Parses incoming JSON requests.
- **bodyParser**: Parses URL-encoded request bodies.
- **morgan("dev")**: Logs HTTP requests to the console.
- **errorHandler**: Custom middleware to handle errors.

## API Routes

- `/api/v1/auth`: Authentication-related routes are defined in `authRoutes.js`.
- `/api/v1/openai`: OpenAI integration routes are defined in `openaiRoutes.js`.

## Environment Variables

Create a `.env` file in the project root directory and define the following environment variables:

- `PORT`: The port on which the server will listen (default is 8080).
- `DEV_MODE`: Set to `development` or `production` to specify the server mode.

Example `.env` file:

```
PORT=8080
DEV_MODE=development
```

## Running the Server

To start the server, run the following command:

```bash
npm start
```

The server will run in the specified mode (development or production) on the defined port, and you will see a message indicating the server's status in the console.

Feel free to modify and extend this server code to meet your specific needs.