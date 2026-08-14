import express from 'express';
import cors from 'cors';
import reviews from './api/reviews.route.js';
import auth from './api/auth.route.js';
import profile from './api/profile.route.js';
import cookieParser from 'cookie-parser';

const app = express();

//middleware to parse json bodies
app.use(express.json());

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://movie-reviews-fullstack-bfwyuvx00-keerthana-hgs-projects.vercel.app'
    ],  
    credentials: true,
  })
);
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('JWT Auth API running');
});

app.use('/api/v1/reviews',reviews);
app.use('/api/v1/auth',auth);
app.use('/api/v1/profile',profile);
app.use(cookieParser());
app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app;
