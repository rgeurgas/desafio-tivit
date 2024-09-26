import { toGlobalId } from 'graphql-relay';

import { GQLResolvers } from '../../generated/schema';

import upsertSalesProposals from './mutations/upsertSalesProposals';

const resolvers: GQLResolvers = {
  SalesProposal: {
    id({ id }) {
      return toGlobalId('SalesProposals', id);
    },
    _id({ id }) {
      return id;
    },
  },
  Query: {
    SalesProposals: async (_parent, _args, ctx) => {
      try {
        const salesproposals = await ctx.models.SalesProposal.findAll({
          raw: true,
          include: [
            {
              model: ctx.models.Client,
              as: 'client',
              required: true,
              attributes: ['id', 'name', 'email'],
            },
            {
              model: ctx.models.ProposalItem,
              as: 'proposalitems',
              required: true,
              attributes: [],
              include: [
                {
                  model: ctx.models.Item,
                  as: 'item',
                  required: true,
                  attributes: ['id', 'name'],
                },
              ],
            },
          ],
          attributes: [
            'id',
            'name',
            ctx.sequelize.fn(
              'sum',
              ctx.sequelize.col('proposalitems->item.price')
            ) as any,
          ],
          group: ['salesproposal.id', 'client.id'],
        });
        console.log(salesproposals);
        return salesproposals;
      } catch (e) {
        const error = e as Error;
        console.log(error.message);
        throw error;
      }
    },
  },
  Mutation: {
    upsertSalesProposals: async (_parent, args, ctx) =>
      upsertSalesProposals(args, ctx),
    // deleteItem: async (_parent, args, ctx) => deleteItem(args, ctx),
  },
};

export default resolvers;
