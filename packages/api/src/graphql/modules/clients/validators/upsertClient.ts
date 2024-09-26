import { IMiddleware } from 'graphql-middleware';
import { object, string, ValidationError } from 'yup';

import { GQLMutationUpsertClientArgs } from '../../../generated/schema';
import { getNodeIdYupValidationSchema } from '../../helper/RelayNodeValidator';
import { GraphQLContext } from '../../../context';

export const upsertClient: IMiddleware<
  Record<string, unknown>,
  GraphQLContext,
  GQLMutationUpsertClientArgs
> = async (resolve, parent, args, ctx, info) => {
  try {
    const schema1 = object({
      input: object({
        clientMutationId: string(),
        id: getNodeIdYupValidationSchema(['Client'], false),
        name: string(),
        email: string(),
        password: string(),
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
