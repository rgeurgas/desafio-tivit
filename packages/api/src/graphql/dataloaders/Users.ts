import { Op } from 'sequelize';
import Dataloader from 'dataloader';

import { Models } from '../../db';

export function getLoader(models: Models) {
  const usersLoader = new Dataloader(async (ids: readonly string[]) => {
    const users = await models.User.findAll({
      where: {
        id: {
          [Op.in]: ids as string[],
        },
      },
      raw: true,
    });
    return users;
  });
  return usersLoader;
}
