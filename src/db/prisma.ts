import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  rejectOnNotFound: true,
  errorFormat:"pretty",
});

export default prisma;
