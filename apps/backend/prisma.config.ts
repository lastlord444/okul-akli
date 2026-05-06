import { defineConfig } from '@prisma/config'

export default defineConfig({
  migrate: {
    schemaPath: 'prisma/schema.prisma',
  },
  datasource: {
    url: process.env.DATABASE_URL || 'postgresql://olimpiyat:olimpiyat_dev_password@localhost:5432/okul_akli?schema=public',
  }
})
