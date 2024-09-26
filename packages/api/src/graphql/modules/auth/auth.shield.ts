import { allow } from 'graphql-shield';

const shield = {
  Mutation: {
    signup: allow,
    login: allow,
  },
  SignupPayload: allow,
  LoginPayload: allow,
};

export default shield;
