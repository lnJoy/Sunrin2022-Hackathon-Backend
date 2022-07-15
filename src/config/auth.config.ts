import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  secret: process.env.AUTH_JWT_SECRET.replace(/\\n/g, '\n'),
  aud: process.env.AUTH_AUD,
}));
