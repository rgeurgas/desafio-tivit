import { rule } from 'graphql-shield';
import createError from 'http-errors';

import { GraphQLContext } from '../context';

export const isAuthenticated = rule()((_parent, _arg, ctx: GraphQLContext) => {
  if (!ctx.user) {
    return createError(401, 'Not authorized');
  }
  return true;
});
