import { Sequelize, Model, BuildOptions } from 'sequelize';

import * as config from './config';
import * as User from './models/User';
import * as Item from './models/Item';
import * as Client from './models/Client';

function isNodeEnvValid(env?: string): env is keyof typeof config {
  return !!env && env in config;
}

const env = process.env.NODE_ENV;

if (!isNodeEnvValid(env)) {
  throw new Error('invalid environment');
}

const seqConfig = config[env];

export const sequelize = new Sequelize(seqConfig);

function buildModel(seq: Sequelize) {
  const UserModel = User.build(seq);
  const ItemModel = Item.build(seq);
  const ClientModel = Client.build(seq);

  UserModel.hasMany(ItemModel, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  ItemModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
  });

  ClientModel.hasMany(ClientModel, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  ClientModel.belongsTo(ClientModel, {
    foreignKey: 'user_id',
  });

  const models = {
    User: UserModel,
    Item: ItemModel,
    Client: ClientModel,
  };

  Object.keys(models).forEach((key) => {
    const modelKey = key as keyof typeof models;
    if (models[modelKey].associate) {
      models[modelKey].associate!(models);
    }
  });

  return models;
}

export const models = buildModel(sequelize);

export type Models = ReturnType<typeof buildModel>;

type AvailableModelKeys = keyof Models;

type AvailableModels = Models[AvailableModelKeys];

type SequelizeInstanceType<TStatic> = TStatic extends typeof Model & {
  new (values?: Partial<infer U>, options?: BuildOptions): infer U;
}
  ? U
  : never;

export type AvailableModelInstanceTypes =
  SequelizeInstanceType<AvailableModels>;

export type SequelizeStaticType<TInstance> = typeof Model & {
  new (values?: Partial<TInstance>, options?: BuildOptions): TInstance;
} & {
  associate?: (
    assocModels: Record<
      string,
      typeof Model & {
        new (values?: Partial<any>, options?: BuildOptions): any;
      }
    >
  ) => void;
};

export type AnyModel = SequelizeStaticType<AvailableModelInstanceTypes>;
