# Kawaiiarts Backend Server

This is the backend server for the Kawaiiarts ecommerce application, built with Node.js, Express, and MongoDB.

## Features

- User authentication (signup/signin)
- JWT token-based authentication
- User profile management
- Order management
- MongoDB database integration
- Input validation
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `config.env` file in the server directory with the following variables:
```
MONGODB_URI=mongodb+srv://hariprasadchinimilli:Hard@2003@cluster0.bgqqqcp.mongodb.net/kawaiiarts?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=kawaiiarts_jwt_secret_key_2024
PORT=5000
```

3. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Sign in user
- `GET /api/auth/me` - Get current user profile
- `POST /api/auth/logout` - Logout user

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get specific order

### Health Check
- `GET /api/health` - Server health check

## Database Models

### User Model
- name (required)
- email (required, unique)
- password (required, encrypted)
- phone (required)
- address (street, city, state, zipCode, country)
- role (user/admin)
- avatar
- isEmailVerified
- resetPasswordToken
- resetPasswordExpire

### Order Model
- user (reference to User)
- items (array of products)
- totalAmount
- shippingAddress
- paymentMethod
- paymentStatus
- orderStatus
- trackingNumber
- notes

## Security Features

- Password encryption using bcryptjs
- JWT token authentication
- Input validation using express-validator
- CORS configuration
- Error handling middleware

## Development

To run the server in development mode with auto-restart:
```bash
npm run dev
```

To run in production mode:
```bash
npm start
```

## Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 5000)

## Error Handling

The server includes comprehensive error handling for:
- Database connection errors
- Authentication errors
- Validation errors
- General server errors

## CORS Configuration

The server is configured to accept requests from:
- `http://localhost:5173` (React dev server)
- Production domains can be added as needed 