import { upsertItem } from './validators/upsertItem';
import { deleteItem } from './validators/deleteItem';

const validators = {
  Mutation: {
    upsertItem,
    deleteItem,
  },
};

export default validators;
