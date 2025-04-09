import { Router } from 'express';
import { BookController } from '../controllers/bookController';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const bookController = new BookController();

const swaggerDocument = YAML.load('./src/specs/openapi.yaml');

const router = Router();

// API Routes
router.get('/api/books', bookController.getAllBooks);
router.get('/api/books/:id', bookController.getBookById);
router.post('/api/books', bookController.createBook);

// Swagger UI
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;