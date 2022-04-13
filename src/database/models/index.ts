import { Sequelize } from 'sequelize';

const databaseConfig = require('../config/db');

export default new Sequelize(databaseConfig);
