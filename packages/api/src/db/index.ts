import { Sequelize, Model, BuildOptions } from 'sequelize';

import * as config from './config';
import * as User from './models/User';
import * as Item from './models/Item';
import * as Client from './models/Client';
import * as SalesProposal from './models/SalesProposal';
import * as ProposalItem from './models/ProposalItem';

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
  const SalesProposalModel = SalesProposal.build(seq);
  const ProposalItemModel = ProposalItem.build(seq);

  ItemModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
  });

  ClientModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
  });

  SalesProposalModel.hasMany(ProposalItemModel, {
    foreignKey: 'salesproposal_id',
    onDelete: 'CASCADE',
  });
  SalesProposalModel.belongsTo(ClientModel, {
    foreignKey: 'client_id',
  });

  ProposalItemModel.belongsTo(ItemModel, {
    foreignKey: 'item_id',
  });

  const models = {
    User: UserModel,
    Item: ItemModel,
    Client: ClientModel,
    SalesProposal: SalesProposalModel,
    ProposalItem: ProposalItemModel,
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
