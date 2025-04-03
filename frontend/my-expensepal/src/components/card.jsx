import React,{useState} from 'react'
import "./components.scss"
import { truncate } from '../utils'
import Delete from "../assets/delete.png"
export const Card = ({
   id,
    amount,
    category,
    description,
    date,
    onDelete,
    onEdit
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedExpense, setUpdatedExpense] = useState({ id, amount, category, description, date });

    const handleChange = (e) => {
        setUpdatedExpense({ ...updatedExpense, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        onEdit(updatedExpense);  // Call the onEdit function from parent
        setIsEditing(false);
    };

  return (
      <div className='card'>
      {  /* The edit button code 
      {isEditing ? "editing"(
                <>
                    <input 
                        type="number" 
                        name="amount" 
                        value={updatedExpense.amount} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        name="category" 
                        value={updatedExpense.category} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        name="description" 
                        value={updatedExpense.description} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="date" 
                        name="date" 
                        value={updatedExpense.date} 
                        onChange={handleChange} 
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>*/}
          <h5>{new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(amount)}</h5>

          {/* <h5>${amount}</h5> */}


          <p>{category}</p>

          <p>{truncate(description || "", 40)}</p>

          <p>{date}</p>

          <div className='delete-container'>
          <button onClick={() => setIsEditing(true)}>Edit</button> {/*Edit button*/}
              <img src={Delete} alt="delete" role='button' tabIndex={0} 
              onClick={() => onDelete?.(id)}
              onKeyDown={(e) => e.key === "Enter" && onDelete?.(id)}/>
          </div>
          
        
    </div>
  );
};

