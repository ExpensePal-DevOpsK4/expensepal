import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './components.scss';

const COLORS = ['#B8B8B8', '#00C49F', '#FFBB28', '#FF8042', '#A569BD', '#F67280'];

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
    <div className="summary-content">
      <div className="summary-details">
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
  
      <div className="chart-container">
        <h4>Category Breakdown</h4>
        <ResponsiveContainer width={250} height={250}>
          <PieChart>
            <Pie
              data={summary.spendingByCategory}
              dataKey="totalAmount"
              nameKey="_id"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {summary.spendingByCategory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  
  );
};

export default Summary;
