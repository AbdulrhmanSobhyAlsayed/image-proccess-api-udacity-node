import { Request, Response } from "express";
import { isFileExists } from "../utils";
import sharp from "sharp";

const RESIZED_IMAGES_PATH = "src/disk/resizedImages/";
const SAVED_IMAGES_PATH = "src/disk/savedImages/";

export function resizeController(req: Request, res: Response): void {
  const file = req.query.file;
  const width = req.query.width as unknown as string;
  const height = req.query.height as unknown as string;
  const filePath = `${RESIZED_IMAGES_PATH}${file}_${width}_${height}.jpg`;

  if (isFileExists(filePath)) {
    res.status(200).sendFile(filePath, { root: "." });
    return;
  }
  sharp(`${SAVED_IMAGES_PATH}${file}.jpg`)
    .resize(parseInt(width), parseInt(height))
    .toFile(filePath, (err: Error) => {
      if (err) {
        res.status(500).send("internal server error");
        return;
      }

      res.status(200).sendFile(filePath, { root: "." });
      return;
    });
}
