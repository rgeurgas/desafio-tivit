import { Op } from 'sequelize';
import Dataloader from 'dataloader';

import { Models } from '../../db';

export function getLoader(models: Models) {
  const itemsLoader = new Dataloader(async (ids: readonly string[]) => {
    const items = await models.Item.findAll({
      where: {
        id: {
          [Op.in]: ids as string[],
        },
      },
      raw: true,
    });
    return items;
  });
  return itemsLoader;
}
