export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 5000,
  },
  database: {
    host: process.env.POSTGRES_HOST || 'postgres',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    nameDB: process.env.POSTGRES_DB || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'Kfdfyljcbr777',
    name: process.env.POSTGRES_username || 'vladislav',
  },
  jwt: {
    secret: process.env.SECRET || 'JWT_SECRET',
    ttl: process.env.JWT_TTL || '30000s',
  },
});
