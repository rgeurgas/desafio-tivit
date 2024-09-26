import { toGlobalId } from 'graphql-relay';

import { GQLResolvers } from '../../generated/schema';

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
};

export default resolvers;
