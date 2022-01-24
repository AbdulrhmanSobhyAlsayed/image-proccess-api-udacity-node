import { isFileExists } from "../utils";

describe("test isFileExist function ", (): void => {
  it("should return true if file path correct", (): void => {
    expect(isFileExists("src/disk/savedImages/fifth.jpg")).toBe(true);
  });

  it("should return false if file path wrong", (): void => {
    expect(isFileExists("src/disk/savedImages/anyThing.jpg")).toBe(false);
  });
});
