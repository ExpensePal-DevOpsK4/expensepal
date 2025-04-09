import { Card, Fab, Navbar, UpcomingExpense } from "./components"
import "./app.scss"
import { useState } from "react"


function App() {
//State for expenses
const [expenses, setExpenses] = useState([
  {id: 1, amount: 2000, category:"food", description:"rice, beans, bread", date:"2025-03-28"}, 
  {id: 2, amount: 1500, category: "clothes", description: "shoes", date:"2025-03-20"}]);

  //function to delete an expense
  const handleDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

 

  return (
    <>
      <main>
        <section className="nav">
          <Navbar />
        </section>

        <div className="mainApp">
          

          <section>
            <UpcomingExpense expenses={expenses}/>
          </section>
        </div>
      </main>
      <Fab onAddExpense={(newExpense) => setExpenses(prev => [...prev, newExpense])}/>
    </>

  )
}

export default App
