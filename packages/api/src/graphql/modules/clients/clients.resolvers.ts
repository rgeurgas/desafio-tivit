import { toGlobalId } from 'graphql-relay';

import { GQLResolvers } from '../../generated/schema';

const resolvers: GQLResolvers = {
  Client: {
    id({ id }) {
      return toGlobalId('Client', id);
    },
    _id({ id }) {
      return id;
    },
    User: async ({ id }, _, ctx) => ctx.dataloaders.Users.load(id),
  },
  Query: {
    Clients: async (_parent, _args, ctx) =>
      ctx.models.Client.findAll({ raw: true }),
  },
};

export default resolvers;
