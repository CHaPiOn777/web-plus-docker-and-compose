export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 5000,
  },
  database: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    nameDB: process.env.POSTGRES_DB || 'nest_project',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    name: process.env.POSTGRES_username || 'postgres',
  },
  jwt: {
    secret: process.env.SECRET || 'JWT_SECRET',
    ttl: process.env.JWT_TTL || '30000s',
  },
});
