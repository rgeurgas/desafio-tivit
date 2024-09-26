import { toGlobalId } from 'graphql-relay';

import { GQLResolvers } from '../../generated/schema';
import signup from './mutations/signup';

const resolvers: GQLResolvers = {
  User: {
    id({ id }) {
      return toGlobalId('User', id);
    },
    _id({ id }) {
      return id;
    },
  },
  Query: {
    me: (_, __, ctx) => ctx.user ?? null,
  },
  Mutation: {
    signup: async (_, args, ctx) => signup(args, ctx),
  },
};

export default resolvers;
