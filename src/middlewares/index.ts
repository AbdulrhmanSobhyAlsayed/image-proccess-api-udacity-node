import { Request, Response, NextFunction } from "express";
import { isFileExists } from "../utils";

const SAVED_IMAGES_PATH = "src/disk/savedImages/";

export function ValidatePassedParameters(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const file = req.query.file;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;

  if (!file || !width || !height) {
    return res.status(400).send("file and width and hight must be passed");
  }

  if (!isFileExists(`${SAVED_IMAGES_PATH}${file}.jpg`)) {
    return res.status(400).send("passed file not exist");
  }

  if (isNaN(width)) {
    return res.status(400).send("width must be number");
  }

  if (isNaN(height)) {
    return res.status(400).send("height must be number");
  }

  next();
}
