import { IMiddleware } from 'graphql-middleware';
import { object, string, ValidationError } from 'yup';

import { GQLMutationLoginArgs } from '../../../generated/schema';
import { GraphQLContext } from '../../../context';

export const login: IMiddleware<
  Record<string, unknown>,
  GraphQLContext,
  GQLMutationLoginArgs
> = async (resolve, parent, args, ctx, info) => {
  try {
    const schema1 = object({
      input: object({
        clientMutationId: string(),
        email: string().required(),
        password: string().required(),
      }).required(),
    }).required();
    const result = await schema1.validate(args);
    return resolve(parent, result, ctx, info);
  } catch (err) {
    if (err instanceof ValidationError) {
      return {
        error: err.errors,
      };
    }
    throw err;
  }
};
