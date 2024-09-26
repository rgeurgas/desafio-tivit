import { Model, Sequelize, DataTypes } from 'sequelize';

import { SequelizeStaticType } from '..';

export interface Item extends Model {
  readonly id: string;
  name: string;
  description: string;
  price: number;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export type ItemStatic = SequelizeStaticType<Item>;

export function build(sequelize: Sequelize) {
  const ItemModel = sequelize.define(
    'item',
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  ) as ItemStatic;
  return ItemModel;
}
