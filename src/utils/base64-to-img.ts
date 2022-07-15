import fs from 'fs';
import {v4 as uuidv4} from 'uuid';

export const base64ToImg = (image: string) => {
  const bufWrite = image.replace(/^data:image\/png;base64,/,"")
	const buf = Buffer.from(bufWrite, 'base64');
  const filePath = `${__dirname}/files/roadCats/${uuidv4()}.png`;
  fs.writeFileSync(filePath, buf);
  return filePath;
}