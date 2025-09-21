
import { prisma } from '../prisma/client';

async function migrate() {
  await prisma.migrate.deploy();
}

migrate()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
                