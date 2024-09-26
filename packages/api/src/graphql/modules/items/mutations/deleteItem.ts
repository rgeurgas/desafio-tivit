import { GraphQLContext } from '../../../context';
import { GQLMutationDeleteItemArgs } from '../../../generated/schema';

async function removeClient(
  args: GQLMutationDeleteItemArgs,
  ctx: GraphQLContext
) {
  const rows = await ctx.models.Item.destroy({
    where: {
      id: args.input.id,
    },
  });

  if (rows > 0) {
    return {
      clientMutationId: args.input.clientMutationId,
    };
  }

  return {
    clientMutationId: args.input.clientMutationId,
    error: ['could not destroy'],
  };
}

export default removeClient;
