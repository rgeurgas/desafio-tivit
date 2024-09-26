import { Model, Sequelize, DataTypes } from 'sequelize';

import { SequelizeStaticType } from '..';

export interface SalesProposal extends Model {
  readonly id: string;
  client_id: string;
  created_at: Date;
  updated_at: Date;
}

export type SalesProposalStatic = SequelizeStaticType<SalesProposal>;

export function build(sequelize: Sequelize) {
  const SalesProposalModel = sequelize.define(
    'salesproposal',
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
  ) as SalesProposalStatic;
  return SalesProposalModel;
}
