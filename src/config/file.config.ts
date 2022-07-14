import { registerAs } from '@nestjs/config';

export default registerAs('file', () => ({
  driver: process.env.FILE_DRIVER,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  cloudinaryName: process.env.CLOUD_NAME,
  cloudinaryKeyId: process.env.CLOUD_API_KEY,
  cloudinarySecreyKey: process.env.CLOUD_API_SECRET,
  maxFileSize: 5242880, // 5mb
}));
