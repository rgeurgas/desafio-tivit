import Bodyparser from 'koa-bodyparser';
import Koa from 'koa';
import logger from 'koa-logger';
import cors from '@koa/cors';

import { errorMiddleware } from './middleware/errorMiddleware';
import { createAppRouter } from './router';
import { authMiddleware } from './middleware/authMiddleware';

export function createServer() {
  const router = createAppRouter();
  const app = new Koa()
    .use(cors())
    .use(Bodyparser())
    .use(logger())
    .use(errorMiddleware)
    .use(authMiddleware)
    .use(router.routes())
    .use(router.allowedMethods());
  return { app, router };
}
