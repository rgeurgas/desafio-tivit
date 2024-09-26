import { Op } from 'sequelize';
import Dataloader from 'dataloader';

import { Models } from '../../db';

export function getLoader(models: Models) {
  const clientsLoader = new Dataloader(async (ids: readonly string[]) => {
    const clients = await models.Client.findAll({
      where: {
        id: {
          [Op.in]: ids as string[],
        },
      },
      raw: true,
    });
    return clients;
  });
  return clientsLoader;
}
