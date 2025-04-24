import React, {useState, useEffect} from 'react'
import { Card } from './card'
import { Fab } from './fab'
import "./components.scss"
import axios from 'axios'
import { getExpenses, addExpense, updateExpense, deleteExpense } from '../../services/api'



export const UpcomingExpense = ({expenses = [], onDelete}) => {
    const [expenseList, setExpenseList] = useState(expenses);

     
     useEffect(() => {
       getExpenses()
       .then((res) => {
        setExpenseList(res.data.data);
       })
       .catch((err) => {
        console.error("Error fetching expenses:", err)
       });
     }, []);


       // Function to add a new expense
    const handleAddExpense = (newExpense) => {
       addExpense(newExpense)
       .then((res) => {
        setExpenseList((prev) => [...prev, res.data.data]);
       })
       .catch((err) => {
        console.error("Error adding expenses:", err);
       });
    };
// Edit expense section
const handleEditExpense = async (updatedExpense) => {
    try {
        const { _id, amount, category, description } = updatedExpense; // Destructure only allowed fields

        const response = await axios.patch(
            `http://16.170.202.218:4000/api/expenses/${_id}`,
            { amount, category, description }
        );

        const updated = response.data.expense;

        setExpenseList((prevExpenses) =>
            prevExpenses.map((expense) =>
                (expense._id ||expense.id) === updated._id ? updated : expense
            )
        );
    } catch (err) {
        console.error("Failed to update expense:", err);
    }
};


    

const handleDeleteExpense = (expenseId) => {
    deleteExpense(expenseId)
        .then(() => {
            setExpenseList((prevExpenses) =>
                prevExpenses.filter(
                    (expense) =>
                        (expense._id || expense.id) !== expenseId
                )
            );
            if (onDelete) onDelete(expenseId);
        })
        .catch((err) => {
            console.error("Error deleting expense:", err);
        });
};

    //const handleDeleteExpense = (expenseId) => {
        //setExpenseList(expenseList.filter(expense => expense.id !== //expenseId));
   // };


    return (
        <div className='upcoming'>

            <h2>💸Expenses</h2>
            <div className='label-header'>
                <p>Amount</p>
                <p>Category</p>
                <p>Description</p>
                <p>Date</p>
                <div className='delete-container'>
                </div>
            </div>
            {/* 
            <div className='content'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>*/}

            <div className="content">
                {expenseList.length > 0 ? (
                    expenseList.map((expense) => (
                        <Card key={expense._id || expense.id}
                         id={expense._id || expense.id}
                         amount={expense.amount}
                         category={expense.category}
                         description={expense.description} 
                         onDelete={() => handleDeleteExpense(expense._id || expense.id)} 
                        onEdit={handleEditExpense}
                        />
                    ))
                ) : (
                    <p className='available-info'>NO UPCOMING EXPENSES AVAILABLE</p>
                )}
            </div>

       {/* Fab component to add expenses */}
       <Fab onAddExpense={handleAddExpense} />
        </div>
    )
}
