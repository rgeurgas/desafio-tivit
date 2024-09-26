import { GraphQLContext } from '../../../context';
import { GQLMutationDeleteClientArgs } from '../../../generated/schema';

async function removeClient(
  args: GQLMutationDeleteClientArgs,
  ctx: GraphQLContext
) {
  const rows = await ctx.models.Client.destroy({
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
