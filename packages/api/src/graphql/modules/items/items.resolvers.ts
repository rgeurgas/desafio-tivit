import { toGlobalId } from 'graphql-relay';

import { GQLResolvers } from '../../generated/schema';

import upsertItem from './mutations/upsertItem';
import deleteItem from './mutations/deleteItem';

const resolvers: GQLResolvers = {
  Item: {
    id({ id }) {
      return toGlobalId('Item', id);
    },
    _id({ id }) {
      return id;
    },
    User: async ({ id }, _, ctx) => ctx.dataloaders.Users.load(id),
  },
  Query: {
    Items: async (_parent, _args, ctx) =>
      ctx.models.Item.findAll({ raw: true }),
  },
  Mutation: {
    upsertItem: async (_parent, args, ctx) => upsertItem(args, ctx),
    deleteItem: async (_parent, args, ctx) => deleteItem(args, ctx),
  },
};

export default resolvers;
