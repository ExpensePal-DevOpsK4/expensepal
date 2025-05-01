require("dotenv").config({ path: ".env.test" });
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
var port = process.env.PORT || 8000;
let server;

beforeAll(async () => {
  port = 8000 + Math.floor(Math.random() * 1000); // Random port between 8000 and 8999
  server = app.listen(port);
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
