import { IMiddleware } from 'graphql-middleware';
import { object, string, ValidationError } from 'yup';

import { GQLMutationDeleteClientArgs } from '../../../generated/schema';
import { getNodeIdYupValidationSchema } from '../../helper/RelayNodeValidator';
import { GraphQLContext } from '../../../context';

export const deleteClient: IMiddleware<
  Record<string, unknown>,
  GraphQLContext,
  GQLMutationDeleteClientArgs
> = async (resolve, parent, args, ctx, info) => {
  try {
    const schema1 = object({
      input: object({
        clientMutationId: string(),
        id: getNodeIdYupValidationSchema(['Client'], false).required(),
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
