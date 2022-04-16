require('dotenv').config();

const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'build';

const extensionFile = process.env.NODE_ENV === 'development' ? 'ts' : 'js';

module.exports = {
  type: 'postgres',
  //     //url: process.env.DATABASE_URL,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT || 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
  logging: false,
  entities: [`src/app/entities/*.ts`, `build/app/entities/*.js`],
  migrations: [`${rootDir}/database/migrations/*.${extensionFile}`],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: `${rootDir}/app/entities`,
    migrationsDir: `${rootDir}/database/migrations`,
    subscribersDir: 'src/subscriber',
  },
};