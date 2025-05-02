require("dotenv").config({ path: ".env.test" });
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
let server;


beforeAll(async () => {
  server = app.listen(0); // ephemeral port
  await mongoose.connect(process.env.DB_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.close();
});

describe("Expenses API", () => {
  it("should return a list of expenses", async () => {
    const response = await request(server).get("/api/expenses");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});
