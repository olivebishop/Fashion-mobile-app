import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import Constants from 'expo-constants';

const getDatabaseUrl = (): string => {
  if (Constants.expoConfig?.extra?.databaseUrl) {
    return Constants.expoConfig.extra.databaseUrl as string;
  }
  
  if (process.env.EXPO_PUBLIC_DATABASE_URL) {
    return process.env.EXPO_PUBLIC_DATABASE_URL;
  }
  
  throw new Error('Database URL is not defined in Constants or environment variables');
};

const databaseUrl = getDatabaseUrl();

const sql = neon(databaseUrl);
const db = drizzle(sql);

export default db;