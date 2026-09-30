import { neon } from '@neondatabase/serverless';

let dbClient: ReturnType<typeof neon> | null = null;

export function getDb() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error('DATABASE_URL is not defined in environment variables');
  }
  if (!dbClient) {
    dbClient = neon(dbUrl);
  }
  return dbClient;
}

export const sql = (strings: TemplateStringsArray, ...values: any[]) => {
  const db = getDb();
  return db(strings, ...values);
};

