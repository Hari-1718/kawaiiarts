# Kawaiiarts - Ecommerce Platform

A modern ecommerce platform for handcrafted string art, built with React, Node.js, and MongoDB.

## Features

### Frontend (React)
- 🛍️ **Ecommerce Shopping**: Browse products, add to cart, wishlist
- 🔐 **User Authentication**: Sign up, sign in, and profile management
- 📱 **Responsive Design**: Mobile-first approach with modern UI
- 🎨 **Beautiful UI**: Modern design with smooth animations
- 📦 **Order Management**: Track orders and view order history
- 💳 **Multiple Payment Options**: WhatsApp integration and direct orders

### Backend (Node.js + MongoDB)
- 🔐 **JWT Authentication**: Secure user authentication
- 📊 **Order Management**: Complete order lifecycle
- 👤 **User Profiles**: Manage user information and addresses
- 🛡️ **Input Validation**: Comprehensive form validation
- 🔒 **Security**: Password encryption and secure routes

## Tech Stack

### Frontend
- React 19
- React Router DOM
- Axios for API calls
- CSS3 with modern animations
- Vite for build tooling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- express-validator for input validation

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Hari-1718/kawaiiarts.git
cd kawaiiarts
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd server
npm install
cd ..
```

4. **Set up environment variables**
   
   Create `server/config.env`:
   ```
   MONGODB_URI=mongodb+srv://hariprasadchinimilli:Hard@2003@cluster0.bgqqqcp.mongodb.net/kawaiiarts?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=kawaiiarts_jwt_secret_key_2024
   PORT=5000
   ```

5. **Start the backend server**
```bash
cd server
npm run dev
```

6. **Start the frontend development server**
```bash
# In a new terminal
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Usage

### For Users
1. **Sign Up**: Create a new account with your details
2. **Browse Products**: View handcrafted string art products
3. **Add to Cart**: Add items to your shopping cart
4. **Create Orders**: Place orders through the platform
5. **Track Orders**: View your order history and status
6. **WhatsApp Integration**: Direct WhatsApp checkout option

### For Developers
- The frontend uses React with modern hooks and context
- Backend follows RESTful API design principles
- MongoDB stores user data and orders
- JWT tokens handle authentication
- Comprehensive error handling throughout

## Project Structure

```
kawaiiarts/
├── src/
│   ├── components/          # React components
│   │   ├── SignIn.jsx      # Sign in form
│   │   ├── SignUp.jsx      # Sign up form
│   │   ├── Navbar.jsx      # Navigation bar
│   │   └── Footer.jsx      # Footer component
│   ├── pages/              # Page components
│   │   ├── Auth.jsx        # Authentication page
│   │   ├── Ecom.jsx        # Ecommerce page
│   │   ├── Home.jsx        # Home page
│   │   └── ...             # Other pages
│   ├── context/            # React context
│   │   └── AuthContext.jsx # Authentication context
│   ├── styles/             # CSS styles
│   │   ├── Auth.css        # Authentication styles
│   │   ├── Shop.css        # Ecommerce styles
│   │   └── ...             # Other styles
│   └── assets/             # Static assets
├── server/                 # Backend server
│   ├── models/             # MongoDB models
│   │   ├── User.js         # User model
│   │   └── Order.js        # Order model
│   ├── routes/             # API routes
│   │   ├── auth.js         # Authentication routes
│   │   ├── user.js         # User routes
│   │   └── order.js        # Order routes
│   ├── middleware/         # Express middleware
│   │   └── auth.js         # Authentication middleware
│   ├── server.js           # Main server file
│   ├── config.env          # Environment variables
│   └── package.json        # Backend dependencies
├── package.json            # Frontend dependencies
└── README.md              # This file
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Sign in user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get specific order

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

- GitHub: [@Hari-1718](https://github.com/Hari-1718)
- Project Link: [https://github.com/Hari-1718/kawaiiarts](https://github.com/Hari-1718/kawaiiarts)

## Acknowledgments

- React team for the amazing framework
- MongoDB for the database solution
- Express.js for the backend framework
- All contributors and supporters
