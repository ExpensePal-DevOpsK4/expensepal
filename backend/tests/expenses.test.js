// tests/expenses.test.js
const request = require("supertest");
const app = require("../app");


describe("Expenses API", () => {
  it("should return a list of expenses", async () => {
    const response = await request(app).get("/api/expenses");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should add a new expense", async () => {
    const newExpense = {
      amount: 1000,
      category: "Transport",
      description: "Uber ride",
    };

    const response = await request(app).post("/api/expenses").send(newExpense);

    expect(response.statusCode).toBe(201); // or 200 if that's what your controller returns
    expect(response.body.data.amount).toBe(1000);
  });
});
