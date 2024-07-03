import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './module/product/product.route';
const app = express();

// parsar and middleware
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Product sever is on here!');
});

export default app;
