import { Models } from '../../db';

import { getLoader as getItemsLoader } from './Items';
import { getLoader as getClientsLoader } from './Clients';
import { getLoader as getUsersLoader } from './Users';

export function getLoaders(models: Models) {
  return {
    Items: getItemsLoader(models),
    Clients: getClientsLoader(models),
    Users: getUsersLoader(models),
  };
}
