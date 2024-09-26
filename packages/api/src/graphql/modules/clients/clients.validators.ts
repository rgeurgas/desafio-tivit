import { upsertClient } from './validators/upsertClient';
import { deleteClient } from './validators/deleteClient';

const validators = {
  Mutation: {
    upsertClient,
    deleteClient,
  },
};

export default validators;
