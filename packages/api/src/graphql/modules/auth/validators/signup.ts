import { IMiddleware } from 'graphql-middleware';
import { object, string, ValidationError } from 'yup';

import { GQLMutationSignupArgs } from '../../../generated/schema';
import { GraphQLContext } from '../../../context';

export const signup: IMiddleware<
  Record<string, unknown>,
  GraphQLContext,
  GQLMutationSignupArgs
> = async (resolve, parent, args, ctx, info) => {
  try {
    const schema1 = object({
      input: object({
        clientMutationId: string(),
        name: string().required(),
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
