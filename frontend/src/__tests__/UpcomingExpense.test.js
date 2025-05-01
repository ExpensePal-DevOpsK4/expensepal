// frontend/src/__tests__/UpcomingExpense.test.js

import React from 'react';
import { render, screen } from "@testing-library/react";
import {UpcomingExpense} from "../components/upcomingExpense";
import '@testing-library/jest-dom'; 

test("fetches and displays expense", () => {
  const expenses = [
    {
      id: 1,
      amount: 2000,
      category: "food",
      description: "rice, beans, bread",
      date: "2025-03-28",
    },
  ];

  render(<UpcomingExpense expenses={expenses} />);

  // Check if the amount appears in the document
  expect(screen.getByText(/£2,000/i)).toBeInTheDocument();
  expect(screen.getByText(/rice, beans, bread/i)).toBeInTheDocument();
});
