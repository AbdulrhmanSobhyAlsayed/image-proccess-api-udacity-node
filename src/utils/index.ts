import fs from "fs";

export function isFileExists(path: string): boolean {
  return fs.existsSync(path);
}
