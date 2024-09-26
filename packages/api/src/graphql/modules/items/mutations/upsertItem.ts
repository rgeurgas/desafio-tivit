import { hash, genSalt } from 'bcrypt';

import { GraphQLContext } from '../../../context';
import { GQLMutationUpsertItemArgs } from '../../../generated/schema';

async function upsertItem(
  args: GQLMutationUpsertItemArgs,
  ctx: GraphQLContext
) {
  try {
    const result =
      (Boolean(args.input.id) || null) &&
      (await ctx.models.Item.findOne({
        where: {
          id: args.input.id,
        },
      }));

    const [item] = await ctx.models.Item.upsert({
      id: args.input.id,
      name: args.input.name ?? result?.name,
      description: args.input.description ?? result?.description,
      price: args.input.price ?? result?.price,
      user_id: ctx.user!.id,
    });

    return {
      clientMutationId: args.input.clientMutationId,
      Item: item,
    };
  } catch (err) {
    const error = err as Error;
    return {
      clientMutationId: args.input.clientMutationId,
      error: [error.message],
    };
  }
}

export default upsertItem;
