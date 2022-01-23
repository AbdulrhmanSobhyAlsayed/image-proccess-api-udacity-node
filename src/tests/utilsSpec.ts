import { isFileExists } from "../utils";

describe("test isFileExist function ", () => {
  it("should return true if file path correct", () => {
    expect(isFileExists("src/disk/savedImages/fifth.jpg")).toBe(true);
  });

  it("should return false if file path wrong", () => {
    expect(isFileExists("src/disk/savedImages/anyThing.jpg")).toBe(false);
  });
});
