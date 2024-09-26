import { Model, Sequelize, DataTypes } from 'sequelize';

import { SequelizeStaticType } from '..';

export interface Client extends Model {
  readonly id: string;
  name: string;
  email: string;
  password_hash: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export type ClientStatic = SequelizeStaticType<Client>;

export function build(sequelize: Sequelize) {
  const ClientModel = sequelize.define(
    'client',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  ) as ClientStatic;
  return ClientModel;
}
