import dotenv from 'dotenv';

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env.test`;
    break;
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}

dotenv.config({ path });

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;
export const ENV = process.env.NODE_ENV;
