import { type Options } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

function getOptions(
  prefix: string,
  aditionalOptions?: Partial<Options>
): Options {
  return {
    dialect: 'postgres',
    database: process.env[`${prefix}_DB_DATABASE`],
    host: process.env[`${prefix}_DB_HOST`],
    port: Number.parseInt(process.env[`${prefix}_DB_PORT`] || '5432', 10),
    username: process.env[`${prefix}_DB_USERNAME`],
    password: process.env[`${prefix}_DB_PASSWORD`],
    logging:
      process.env[`${prefix}_DB_LOGGING`] === 'true' ? console.log : false,
    ...aditionalOptions,
  };
}

export const development = getOptions('DEV');
