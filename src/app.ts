import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './module/product/product.route';
import { OrderRoute } from './module/order/order.route';
const app = express();

// parsar and middleware
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoute);
app.use('/api/orders', OrderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Product sever is on here!');
});

export default app;
