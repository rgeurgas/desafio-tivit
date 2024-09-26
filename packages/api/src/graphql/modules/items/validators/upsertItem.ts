import { IMiddleware } from 'graphql-middleware';
import { object, string, ValidationError, number } from 'yup';

import { GQLMutationUpsertItemArgs } from '../../../generated/schema';
import { getNodeIdYupValidationSchema } from '../../helper/RelayNodeValidator';
import { GraphQLContext } from '../../../context';

export const upsertItem: IMiddleware<
  Record<string, unknown>,
  GraphQLContext,
  GQLMutationUpsertItemArgs
> = async (resolve, parent, args, ctx, info) => {
  try {
    const schema1 = object({
      input: object({
        clientMutationId: string(),
        id: getNodeIdYupValidationSchema(['Item'], false),
        name: string(),
        description: string(),
        price: number(),
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
