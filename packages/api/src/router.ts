import { createYoga } from 'graphql-yoga';
import koaPlayground from 'graphql-playground-middleware-koa';
import { ParameterizedContext } from 'koa';
import Router from '@koa/router';

import { schema } from './graphql';
import { getContext } from './graphql/context';

export function createAppRouter(): Router {
  const router = new Router()
    .all('/playground', koaPlayground({ endpoint: '/graphql' }))
    .post('/graphql', async (ctx) => {
      const yoga = createYoga<ParameterizedContext>({
        schema,
        context: getContext(ctx),
      });

      const response = await yoga.handleNodeRequestAndResponse(
        ctx.req,
        ctx.res,
        ctx
      );

      ctx.status = response.status;

      response.headers.forEach((value, key) => {
        ctx.append(key, value);
      });

      ctx.body = response.body;
    });
  return router;
}
