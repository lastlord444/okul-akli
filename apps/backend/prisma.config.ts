import { defineConfig } from '@prisma/config'

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in the environment. Please copy .env.example to .env and provide a connection string.');
}

export default defineConfig({
  migrate: {
    schemaPath: 'prisma/schema.prisma',
  },
  datasource: {
    url: databaseUrl,
  }
})
