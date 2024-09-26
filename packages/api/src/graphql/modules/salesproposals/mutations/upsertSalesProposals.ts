import { GraphQLContext } from '../../../context';
import { GQLMutationUpsertSalesProposalsArgs } from '../../../generated/schema';

async function upsertSalesProposals(
  args: GQLMutationUpsertSalesProposalsArgs,
  ctx: GraphQLContext
) {
  try {
    const salesproposal = await ctx.sequelize.transaction(
      async (transaction) => {
        const result =
          (Boolean(args.input.id) || null) &&
          (await ctx.models.SalesProposal.findOne({
            where: {
              id: args.input.id,
            },
          }));

        const [salesproposal] = await ctx.models.SalesProposal.upsert(
          {
            id: args.input.id,
            client_id: args.input.client ?? result?.client_id,
          },
          { transaction }
        );

        if (args.input.items) {
          await Promise.all(
            args.input.items!.map((item) => {
              return ctx.models.ProposalItem.upsert(
                {
                  salesproposal_id: salesproposal.id,
                  item_id: item,
                },
                { transaction }
              );
            })
          );
        }

        return salesproposal;
      }
    );

    return {
      clientMutationId: args.input.clientMutationId,
      SalesProposal: salesproposal,
    };
  } catch (err) {
    const error = err as Error;
    return {
      clientMutationId: args.input.clientMutationId,
      error: [error.message],
    };
  }
}

export default upsertSalesProposals;
