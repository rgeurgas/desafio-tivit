import { createServer } from './server';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 8000;

createServer().app.listen(port, '0.0.0.0', 5, () => {
  console.log(`server is running on port ${port}`);
});
