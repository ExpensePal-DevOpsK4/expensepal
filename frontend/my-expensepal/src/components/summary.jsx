import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.scss';

const Summary = () => {
    const [summary, setSummary] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchSummary = async () => {
        try {
          const res = await axios.get('http://16.170.202.218:4000/api/expenses/summarize');
          setSummary(res.data.data);
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch summary");
          setLoading(false);
        }
      };
  
      fetchSummary();
    }, []);
  
    if (loading) return <p>Loading summary...</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div className="summary">
        <h2>Spending Summary</h2>
        <p><strong>Total Spending:</strong> £{summary.totalSpending}</p>
        <p><strong>Total Expenses:</strong> {summary.totalExpenses}</p>
        <p><strong>Average Expense:</strong> £{summary.averageExpense}</p>
  
        <h3>Spending by Category:</h3>
        <ul>
          {summary.spendingByCategory.map((item) => (
            <li key={item._id}>
              {item._id}: £{item.totalAmount}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Summary;
  