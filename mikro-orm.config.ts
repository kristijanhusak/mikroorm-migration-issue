
export default {
  entities: ['./**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  clientUrl: process.env.DATABASE_URL,
  type: 'postgresql',
};
