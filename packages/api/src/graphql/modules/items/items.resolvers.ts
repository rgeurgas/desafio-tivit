import { toGlobalId } from 'graphql-relay';

import { GQLResolvers } from '../../generated/schema';

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
};

export default resolvers;
