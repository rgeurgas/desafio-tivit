import { allow } from 'graphql-shield';
import { isAuthenticated } from '../../rules';

// Adicionar shield para bloquear acesso a elementos não dele
const shield = {
  Query: {
    me: allow,
  },
  User: isAuthenticated,
};

export default shield;
