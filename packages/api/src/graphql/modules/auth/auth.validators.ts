import { signup } from './validators/signup';
import { login } from './validators/login';

const validators = {
  Mutation: {
    signup,
    login,
  },
};

export default validators;
