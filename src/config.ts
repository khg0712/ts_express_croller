import { config } from 'dotenv';

config();

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;
export const ENV = process.env.NODE_ENV;
