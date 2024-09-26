import { toGlobalId } from 'graphql-relay';

import { GQLResolvers } from '../../generated/schema';

import upsertClient from './mutations/upsertClient';
import deleteClient from './mutations/deleteClient';

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
  Mutation: {
    upsertClient: async (_parent, args, ctx) => upsertClient(args, ctx),
    deleteClient: async (_parent, args, ctx) => deleteClient(args, ctx),
  },
};

export default resolvers;
