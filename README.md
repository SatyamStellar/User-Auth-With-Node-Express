# User Auth

## Description
This is a Node.js backend API built with Express.js, designed to handle authentication, user management, and other core functionalities. It uses MongoDB as the database and includes middleware for authentication, error handling, and security (e.g., Arccjet for rate limiting or security features). The project is structured for scalability and maintainability, with separate folders for configurations, controllers, middleware, models, and routes.

## Table of Contents
- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation
### Clone the repository:
```bash
git clone <repository-url>
cd <project-folder>
```
### Install the dependencies:
```bash
pnpm install
```

## Prerequisites
- Node.js (version 14.x or higher)
- MongoDB (local or remote instance)
- pnpm (comes with Node.js)

## Configuration
Create a `.env` file in the root directory based on the provided `env.js` or `.env.example` (if available):
```env
#Port
PORT=5550
SERVER_URL="http://localhost:5550"

#Environment
NODE_ENV=development

#Database
DB_URI="<your-mongodb-uri>"

#JWT
JWT_SECRET="<your-jwt-secret>"
JWT_EXPIRES_IN="7d"

#ARCJET
ARCJET_KEY="<your-arcjet-key>"
ARCJET_ENV=development

#QSTASH
QSTASH_URL="https://qstash.upstash.io"
QSTASH_TOKEN="<your-qstash-token>"
QSTASH_CURRENT_SIGNING_KEY="<your-current-signing-key>"
QSTASH_NEXT_SIGNING_KEY="<your-next-signing-key>"

```
Update the `config/arccjet.js` and `database/mongodb.js` files with your specific configurations if needed.

## Running the Application
Ensure MongoDB is running locally or your remote MongoDB instance is accessible.

Start the application:
```bash
pnpm start
```
Or, for development with auto-reloading:
```bash
pnpm run dev
```
(Note: You may need to install `nodemon` as a dev dependency for the `dev` script.)

The server will run on `http://localhost:3000` (or the port specified in your `.env`).

## API Endpoints
### Authentication
- `POST /api/auth/login` - Log in a user
- `POST /api/auth/register` - Register a new user
- `GET /api/auth/me` - Get current user (protected route)

### Users
- `GET /api/users` - List all users (admin only, protected)
- `GET /api/users/:id` - Get a specific user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

(Note: Adjust these endpoints based on the actual implementation in `routes/auth.routes.js` and `routes/user.routes.js`.)

## Folder Structure
```
project-root/
├── config/
│   ├── arccjet.js         # Arccjet configuration (e.g., rate limiting, security)
│   └── env.js             # Environment variable setup
├── controllers/           # Business logic for routes
│   ├── auth.controller.js # Authentication-related logic
│   └── user.controller.js # User-related logic
├── database/              # Database configurations
│   └── mongodb.js         # MongoDB connection and setup
├── middlewares/           # Custom middleware
│   ├── arccjet.middleware.js # Arccjet middleware (e.g., rate limiting)
│   ├── auth.middleware.js    # Authentication middleware (e.g., JWT verification)
│   └── error.middleware.js   # Error handling middleware
├── models/                # Mongoose models
│   └── user.model.js      # User schema and model
├── routes/                # API route definitions
│   ├── auth.routes.js     # Authentication routes
│   └── user.routes.js     # User routes
├── .gitignore             # Git ignore file
├── README.md              # This file
└── package.json           # Project dependencies and scripts
```

## License
This project is licensed under the MIT License. See `LICENSE` for more details.
