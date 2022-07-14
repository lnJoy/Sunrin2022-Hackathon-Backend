import { registerAs } from '@nestjs/config';

export default registerAs('firebase', () => ({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
}));
