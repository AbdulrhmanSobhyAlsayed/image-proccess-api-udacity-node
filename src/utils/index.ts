import fs from "fs";
import sharp from "sharp";

export function isFileExists(path: string): boolean {
  return fs.existsSync(path);
}

export function resize(
  file: string,
  width: number,
  height: number,
  disPath: string
) {
  return sharp(file).resize(width, height).toFile(disPath);
}
