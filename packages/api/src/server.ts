import { createYoga } from 'graphql-yoga';
import Koa from 'koa';
import logger from 'koa-logger';

import { errorMiddleware } from './middleware/errorMiddleware';
import { authMiddleware } from './middleware/authMiddleware';
import { schema } from './graphql';
import { getContext } from './graphql/context';

const yoga = createYoga<Koa.ParameterizedContext>({
  schema,
  context: (ctx) => getContext(ctx),
});

export function createServer() {
  const app = new Koa()
    .use(logger())
    .use(errorMiddleware)
    .use(authMiddleware)
    .use(async (ctx) => {
      // Second parameter adds Koa's context into GraphQL Context
      const response = await yoga.handleNodeRequestAndResponse(
        ctx.req,
        ctx.res,
        ctx
      );

      // Set status code
      ctx.status = response.status;

      // Set headers
      response.headers.forEach((value, key) => {
        ctx.append(key, value);
      });

      // Converts ReadableStream to a NodeJS Stream
      ctx.body = response.body;
    });
  return { app };
}
