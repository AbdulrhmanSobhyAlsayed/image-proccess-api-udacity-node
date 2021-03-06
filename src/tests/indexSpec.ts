import supertest from "supertest";
import app from "..";

const request = supertest(app);
describe("Test resize endpoint responses", (): void => {
  it("should return status code 200 if passed queries are true", async (): Promise<void> => {
    const response = await request.get(
      "/resize?file=first&width=400&height=300"
    );
    expect(response.status).toBe(200);
  });
  it("should return status code 400 if passed queries are false", async (): Promise<void> => {
    const response = await request.get(
      "/resize?file=firs&width=400&height=300"
    );
    expect(response.status).toBe(400);
  });
});
