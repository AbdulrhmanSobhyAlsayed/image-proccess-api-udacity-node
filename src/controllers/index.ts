import { Request, Response } from "express";
import { isFileExists } from "../utils";
import sharp from "sharp";
import { resize } from "../utils";

const RESIZED_IMAGES_PATH = "src/disk/resizedImages/";
const SAVED_IMAGES_PATH = "src/disk/savedImages/";

export async function resizeController(
  req: Request,
  res: Response
): Promise<void> {
  const file = req.query.file;
  const width = req.query.width as unknown as string;
  const height = req.query.height as unknown as string;
  const filePath = `${RESIZED_IMAGES_PATH}${file}_${width}_${height}.jpg`;

  if (isFileExists(filePath)) {
    res.status(200).sendFile(filePath, { root: "." });
    return;
  }
  try {
    await resize(
      `${SAVED_IMAGES_PATH}${file}.jpg`,
      parseInt(width),
      parseInt(height),
      filePath
    );
    res.status(200).sendFile(filePath, { root: "." });
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error");
  }
}
