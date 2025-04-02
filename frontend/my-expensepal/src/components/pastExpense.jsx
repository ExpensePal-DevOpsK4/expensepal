import React from 'react'
import { Card } from './card'
import "./components.scss"


export const PastExpense = ({expenses, onDelete, totalExpense, sortExpenses}) => {
    return (
        <div className='past'>

            <h2>Past Expenses</h2>
            <div className='label-header'>
                <p>Amount</p>
                <p>Category</p>
                <p>Description</p>
                <p>Date</p>
                <div className='delete-container'>
                    {/*i removed the img tag*/}
                </div>
            </div>

            <div className='content'>
                {expenses.length > 0 ? (expenses.map((expense) => (
                     <Card
                     key={expense.id}
                     id={expense.id} 
                     amount={expense.amount}
                     category={expense.category}
                     description={expense.description}
                     date={expense.date}
                     onDelete={onDelete}
                 />
                ))
            ) : (
                <p className='available-info'>NO PAST EXPENSE AVAILABLE</p>
            )}
               
                {/*i removed the excess cards*/}
            </div>

            {/*total expense display */}
            <div className='total-expense'>
                <h3>Total Expenses: {totalExpense}</h3>
            </div>
        </div>
    );
};



