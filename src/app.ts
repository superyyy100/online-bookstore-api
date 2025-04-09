import express from 'express';
import router from './routes/route';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`API Documentation available at http://localhost:${port}/api-docs`);
});