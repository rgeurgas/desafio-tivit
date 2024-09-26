import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';

import { GraphQLContext } from '../../../context';
import { GQLMutationLoginArgs } from '../../../generated/schema';

async function login(args: GQLMutationLoginArgs, ctx: GraphQLContext) {
  const user = await ctx.models.User.findOne({
    where: {
      email: args.input.email,
    },
  });

  if (!user) {
    return {
      clientMutationId: args.input.clientMutationId,
      error: ['invalid email or password'],
    };
  }

  const valid = await compare(args.input.password, user.password_hash);
  if (!valid) {
    return {
      clientMutationId: args.input.clientMutationId,
      error: ['invalid email or password'],
    };
  }

  const token = sign({ userId: user.id }, process.env.API_SECRET as string, {});
  return {
    clientMutationId: args.input.clientMutationId,
    token,
  };
}

export default login;
