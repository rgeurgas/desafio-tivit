import { fromGlobalId } from 'graphql-relay';

import { GQLResolvers } from '../../generated/schema';
import { GraphQLContext } from '../../context';
import { Models } from '../../../db';

function isSupportedType(
  type: string,
  ctx: GraphQLContext
): type is keyof Omit<Models, 'Parameter'> {
  return type in ctx.models;
}

const resolvers: GQLResolvers = {
  Query: {
    async node(_parent, args, ctx) {
      const { type, id } = fromGlobalId(args.id);
      if (!isSupportedType(type, ctx)) {
        return null;
      }
      const node = await ctx.dataloaders[
        type as keyof typeof ctx.dataloaders
      ].load(id);
      const response = {
        ...(node as Omit<typeof node, string>),
        __typename: type,
        _id: (node as any).id,
      };
      return response as any;
    },
  },
  Node: {
    __resolveType: ({ __typename }: any) => __typename,
  },
};

export default resolvers;
