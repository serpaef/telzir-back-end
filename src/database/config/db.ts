module.exports = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'TELZIR',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3002',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};
