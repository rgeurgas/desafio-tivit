import { IMiddleware } from 'graphql-middleware';
import { object, string, ValidationError, number } from 'yup';

import { GQLMutationUpsertSalesProposalsArgs } from '../../../generated/schema';
import {
  getArrayNodeIdYupValidationSchema,
  getNodeIdYupValidationSchema,
} from '../../helper/RelayNodeValidator';
import { GraphQLContext } from '../../../context';

export const upsertSalesProposals: IMiddleware<
  Record<string, unknown>,
  GraphQLContext,
  GQLMutationUpsertSalesProposalsArgs
> = async (resolve, parent, args, ctx, info) => {
  try {
    const schema1 = object({
      input: object({
        clientMutationId: string(),
        id: getNodeIdYupValidationSchema(['SalesProposal'], false),
        name: string(),
        client: getNodeIdYupValidationSchema(['Client'], false),
        items: getArrayNodeIdYupValidationSchema(['Item'], false),
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
