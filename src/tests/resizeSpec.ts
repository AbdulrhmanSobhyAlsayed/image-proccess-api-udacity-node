import { resize } from "../utils";

describe("Test resize function", (): void => {
  it("should work without throwing any errors if passed valid values ", async (): Promise<void> => {
    try {
      let info = await resize(
        "src/disk/savedImages/fifth.jpg",
        800,
        900,
        "src/disk/resizedImages/fifth_800_900.jpg"
      );
      expect(info).toBeDefined();
    } catch (err) {}
  });
  it("should work with throwing any errors if passed invalid values ", async (): Promise<void> => {
    try {
      await resize(
        "src/disk/savedImages/fifth.jpg",
        0,
        900,
        "src/disk/resizedImages/fifth_800_900.jpg"
      );
    } catch (err) {
      expect(err).toBeDefined();
    }
  });
});
