import { hash, genSalt } from 'bcrypt';

import { GraphQLContext } from '../../../context';
import { GQLMutationUpsertClientArgs } from '../../../generated/schema';

async function upsertClient(
  args: GQLMutationUpsertClientArgs,
  ctx: GraphQLContext
) {
  try {
    if (!Boolean(args.input.id) && Boolean(args.input.email)) {
      if (
        (await ctx.models.Client.findOne({
          where: {
            email: args.input.email,
          },
        })) !== null
      ) {
        throw Error('Duplicate Client Insert');
      }
    }

    const result =
      (Boolean(args.input.id) || null) &&
      (await ctx.models.Client.findOne({
        where: {
          id: args.input.id,
        },
      }));

    const salt = await genSalt();

    const pass =
      (args.input.password && (await hash(args.input.password, salt))) ||
      result?.password_hash;

    const [client] = await ctx.models.Client.upsert({
      id: args.input.id,
      name: args.input.name ?? result?.name,
      email: args.input.email ?? result?.email,
      user_id: ctx.user!.id,
      password_hash: pass,
    });

    return {
      clientMutationId: args.input.clientMutationId,
      Client: client,
    };
  } catch (err) {
    const error = err as Error;
    return {
      clientMutationId: args.input.clientMutationId,
      error: [error.message],
    };
  }
}

export default upsertClient;
