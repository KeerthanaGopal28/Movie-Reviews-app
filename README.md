# 🎬 Movie Review App

A full-stack Movie Review web application that allows users to browse movies, register/login securely, and post, update, or delete their own reviews. The application is built using the MERN stack with JWT authentication and MongoDB Atlas for cloud data storage.

---

## 🚀 Features

- 🔐 User Authentication (Register & Login)
- 🔑 JWT-based Authentication and Authorization
- 🎥 Browse Movies
- ✍️ Add Movie Reviews
- 📝 Edit Your Own Reviews
- ❌ Delete Your Own Reviews
- 👤 Protected Routes
- 🌐 RESTful API
- ☁️ MongoDB Atlas Cloud Database
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- CSS
- Axios
- JWT Decode

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Cookie Parser
- CORS

---

## 📂 Project Structure

```
Movie-Review-App
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend
│   ├── api
│   ├── dao
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 📸 Screenshots
Soon I will add!!!
## ⚙️ Installation
After clean setup still migration work is going on!!

## 🔒 Authentication Flow

1. User registers.
2. Password is encrypted using bcrypt.
3. User logs in.
4. Server generates a JWT Access Token.
5. Token is stored on the client.
6. Protected routes verify the JWT.
7. Only authenticated users can create, update, or delete their own reviews.

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | Login user |

### Reviews

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/reviews` | Get all reviews |
| POST | `/api/v1/reviews/new` | Add a review |
| PUT | `/api/v1/reviews/:id` | Update a review |
| DELETE | `/api/v1/reviews/:id` | Delete a review |

*(Update the endpoints if they differ in your project.)*

---

## 🗄️ Database

MongoDB Atlas stores:

### Users

```json
{
  "_id": "...",
  "username": "John",
  "email": "john@example.com",
  "password": "hashed_password"
}
```

### Reviews

```json
{
  "_id": "...",
  "movieId": 123,
  "user": "...",
  "username": "John",
  "review": "Amazing movie!"
}
```

---

## 🌟 Future Improvements

- ⭐ Movie ratings
- ❤️ Like reviews
- 🔍 Search movies
- 🎭 Filter by genre
- 📄 Pagination
- 👤 User profile page
- 📷 Profile pictures
- 🌙 Dark mode
- 🎬 Movie trailers
- 📊 Review analytics

---

## 👩‍💻 Author

**Keerthana Gopal**

- GitHub: https://github.com/KeerthanaGopal28
- LinkedIn: https://www.linkedin.com/in/keerthana-h-g-5917132ba

---

## 📄 License

This project is licensed under the MIT License.
