import { Model, Sequelize, DataTypes } from 'sequelize';

import { SequelizeStaticType } from '..';

export interface ProposalItem extends Model {
  readonly id: string;
  salesproposal_id: string;
  item_id: string;
  created_at: Date;
  updated_at: Date;
}

export type ProposalItemStatic = SequelizeStaticType<ProposalItem>;

export function build(sequelize: Sequelize) {
  const ProposalItemModel = sequelize.define(
    'proposalitem',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  ) as ProposalItemStatic;
  return ProposalItemModel;
}
