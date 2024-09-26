import { hash, genSalt } from 'bcrypt';

import { GraphQLContext } from '../../../context';
import { GQLMutationSignupArgs } from '../../../generated/schema';

async function signup(args: GQLMutationSignupArgs, ctx: GraphQLContext) {
  try {
    const user = await ctx.sequelize.transaction(async (transaction) => {
      const salt = await genSalt();

      const pass =
        args.input.password && (await hash(args.input.password, salt));

      const [user] = await ctx.models.User.upsert(
        {
          name: args.input.name,
          email: args.input.email,
          password_hash: pass,
        },
        { transaction }
      );

      return user;
    });

    return {
      clientMutationId: args.input.clientMutationId,
      User: user,
    };
  } catch (error) {
    return {
      clientMutationId: args.input.clientMutationId,
      error: [error],
    };
  }
}

export default signup;
