require("dotenv").config({ path: ".env.test" });
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

let server;

beforeAll(async () => {
  server = app.listen(process.env.PORT);
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("Connected to expensepalDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
});

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});

describe("Expenses API", () => {
  it("should return a list of expenses", async () => {
    const response = await request(server).get("/api/expenses");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should add a new expense", async () => {
    const newExpense = {
      amount: 1000,
      category: "Transport",
      description: "Uber ride",
    };

    const response = await request(server)
      .post("/api/expenses")
      .send(newExpense);
    expect(response.statusCode).toBe(201);
    expect(response.body.data.amount).toBe(1000);
  });
});
