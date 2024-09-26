import { GQLResolvers } from '../../generated/schema';
import login from './mutations/login';

import signup from './mutations/signup';

const resolvers: GQLResolvers = {
  Mutation: {
    signup: async (_, args, ctx) => signup(args, ctx),
    login: async (_parent, args, ctx) => login(args, ctx),
  },
};

export default resolvers;
