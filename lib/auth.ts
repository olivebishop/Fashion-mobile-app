import * as Crypto from 'expo-crypto';
import db from './db';
import { users, NewUser } from './schema';
import { eq } from 'drizzle-orm';

export async function createUser(email: string, password: string): Promise<NewUser> {
  const hashedPassword = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password
  );
  const newUser: NewUser = {
    id: crypto.randomUUID(),
    email,
    hashedPassword
  };
  await db.insert(users).values(newUser);
  return newUser;
}

export async function validateUser(email: string, password: string): Promise<NewUser | null> {
  const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (user.length === 0) return null;
  const hashedPassword = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password
  );
  return hashedPassword === user[0].hashedPassword ? user[0] : null;
}