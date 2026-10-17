import "dotenv/config";
import { ImageKit, toFile } from "@imagekit/nodejs";

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export const uploadFile = async (buffer) => {
  const result = await imagekit.files.upload({
    file: await toFile(buffer, "image.png"),
    fileName: "image.png",
  });

  return result;
};
