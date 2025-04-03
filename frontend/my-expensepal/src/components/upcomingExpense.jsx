import React from 'react'
import { Card } from './card'
import { Fab } from './fab'
import "./components.scss"


export const UpcomingExpense = ({expenses = [], onDelete}) => {
    const [expenseList, setExpenseList] = useState(expenses);

     // Sync local state when props change
     //useEffect(() => {
       // setExpenseList(expenses);
    //}, [expenses]);


       // Function to add a new expense
    const handleAddExpense = (newExpense) => {
        setExpenseList((prevExpenses) => [...prevExpenses, newExpense]);
    };

    

    const handleDeleteExpense = (expenseId) => {
        setExpenseList((prevExpenses) => prevExpenses.filter(expense => expense.id !== expenseId));
        if (onDelete) onDelete(expenseId);
    };

    //const handleDeleteExpense = (expenseId) => {
        //setExpenseList(expenseList.filter(expense => expense.id !== //expenseId));
   // };


    return (
        <div className='upcoming'>

            <h2>Upcoming Expenses</h2>
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
                        <Card key={expense.id} expense={expense} onDelete={() => handleDeleteExpense(expense.id)} 
                    
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
