import { Sequelize } from 'sequelize';
import 'dotenv/config';

const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT } = process.env;

export const database = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mysql',
  host: DB_HOST,
  port: +DB_PORT,
});
