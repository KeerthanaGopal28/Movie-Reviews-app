# 🎬 Movie Review App

A full-stack movie review application where users can browse movies, create accounts, and securely create, update, and delete their own reviews.

**Live Demo:** https://movie-reviews-fullstack-o70cd6lo0-keerthana-hgs-projects.vercel.app/

## 🚀 Features

* 🔐 User registration and login
* 🔑 JWT-based authentication
* 🔄 Access token and refresh token authentication
* 🛡️ Protected routes and authorization middleware
* 🎥 Movie browsing and search using the TMDB API
* ✍️ Create movie reviews
* 📝 Update your own reviews
* ❌ Delete your own reviews
* 👤 User profile
* 🌐 RESTful backend APIs
* ☁️ MongoDB Atlas cloud database
* 📱 Responsive React interface

## 🏗️ System Architecture

```text
                 ┌─────────────────────┐
                 │    React Frontend   │
                 │                     │
                 │ Pages / Components  │
                 └──────────┬──────────┘
                            │
                         Axios
                            │
                            ▼
                 ┌─────────────────────┐
                 │   Express.js API    │
                 │                     │
                 │ Routes / Controllers│
                 └──────────┬──────────┘
                            │
                   Authentication
                     Middleware
                            │
                            ▼
                 ┌─────────────────────┐
                 │      DAO Layer      │
                 │  Data Access Logic  │
                 └──────────┬──────────┘
                            │
                         Mongoose
                            │
                            ▼
                 ┌─────────────────────┐
                 │    MongoDB Atlas    │
                 │ Users / Reviews     │
                 └─────────────────────┘

        React ───────────────► TMDB API
```

## 🔐 Authentication & Authorization Flow

1. User registers with username, email, and password.
2. Password is hashed using `bcryptjs` before storage.
3. User logs in and the server issues an access token and refresh token.
4. The access token is used to authenticate protected API requests.
5. Authentication middleware verifies the JWT and identifies the user.
6. Review operations verify that the authenticated user owns the review.
7. Only the review creator can update or delete that review.
8. Refresh-token handling allows a new access token to be issued when required.

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* CSS
* JWT Decode

### Backend

* Node.js
* Express.js
* Mongoose
* MongoDB Atlas
* JSON Web Token
* bcryptjs
* Cookie Parser
* CORS

### External Services

* TMDB API
* Vercel
* Render
* MongoDB Atlas

## 📂 Project Structure

```text
Movie-Review-App/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── api/
│   ├── dao/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 📡 REST API Endpoints

### Authentication

| Method | Endpoint                | Description                         |
| ------ | ----------------------- | ----------------------------------- |
| POST   | `/api/v1/auth/register` | Register a new user                 |
| POST   | `/api/v1/auth/login`    | Authenticate user                   |
| POST   | `/api/v1/auth`          | Handle refresh-token authentication |

### Reviews

| Method | Endpoint              | Description      |
| ------ | --------------------- | ---------------- |
| GET    | `/api/v1/reviews`     | Retrieve reviews |
| POST   | `/api/v1/reviews/new` | Create a review  |
| PUT    | `/api/v1/reviews/:id` | Update a review  |
| DELETE | `/api/v1/reviews/:id` | Delete a review  |

> Update these endpoints to exactly match the routes implemented in the backend.

## 🗄️ Database Design

The application uses MongoDB Atlas with Mongoose schemas for persistent data storage.

### Users

```json
{
  "_id": "...",
  "username": "John",
  "email": "john@example.com",
  "password": "bcrypt_hashed_password"
}
```

### Reviews

```json
{
  "_id": "...",
  "movieId": 123,
  "user": "...",
  "review": "Amazing movie!"
}
```

Review ownership is enforced at the backend so users cannot modify or delete reviews belonging to another user.

## ⚡ Application Flow

```text
User
  ↓
React UI
  ↓
Axios Request
  ↓
Express Route
  ↓
JWT Authentication Middleware
  ↓
Controller
  ↓
DAO
  ↓
Mongoose
  ↓
MongoDB Atlas
  ↓
JSON Response
  ↓
React UI
```

## 📸 Screenshots

Screenshots of the application will be added here.

## 🚀 Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

## 🔒 Security

* Passwords are hashed using `bcryptjs`.
* JWT authentication protects private endpoints.
* Refresh tokens are handled separately from access tokens.
* Protected API requests require valid authentication.
* Backend authorization verifies review ownership before update/delete operations.
* Secrets and API credentials are stored using environment variables and are not committed to the repository.

## 🌟 Future Improvements

* ⭐ Movie ratings
* ❤️ Like/reaction system for reviews
* 📄 Pagination
* 🎭 Advanced genre filtering
* 📊 Review analytics
* 🎬 Movie trailer integration
* 🌙 Dark mode

## 👩‍💻 Author

**Keerthana Gopal**

GitHub: https://github.com/KeerthanaGopal28

LinkedIn: https://www.linkedin.com/in/keerthana-h-g-5917132ba

## 📄 License

This project is licensed under the MIT License.
