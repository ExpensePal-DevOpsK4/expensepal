import React,{useState} from 'react'
import "./components.scss"
import { truncate } from '../utils'
import Delete from "../assets/delete.png"
export const Card = ({
   id,
    amount,
    category,
    description,
    onDelete,
    onEdit
}) => {
    const [isEditing, setIsEditing] = useState(false);
       const [updatedExpense, setUpdatedExpense] = useState({ _id: id, amount, category, description});

     const categoryOptions = ["Food & Drinks", "Transport", "Rent & Utilities", "Shopping", "Health & Medical", "Entertainment", "Savings & Investments", "Education", "Debt & Loans", "Miscellaneous"];
   
       const handleChange = (e) => {
           setUpdatedExpense({ ...updatedExpense, [e.target.name]: e.target.value });
       };
   
       const handleSave = () => {

        if (onEdit) {
           onEdit(updatedExpense);
        }     
           setIsEditing(false);
       };
   
  return (
      <div className='card'>
      {  /* The edit button code */}
      {isEditing ? (
                <>
                    <input 
                        type="number" 
                        name="amount" 
                        value={updatedExpense.amount} 
                        onChange={handleChange} 
                    />
                 { /*<input 
                        type="text" 
                        name="category" 
                        value={updatedExpense.category} 
                        onChange={handleChange} 
                    />*/}
                     <select
            name="category"
            value={updatedExpense.category}
            onChange={handleChange}
        >
            <option value="">Select category</option>
            {categoryOptions.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
                    <input 
                        type="text" 
                        name="description" 
                        value={updatedExpense.description} 
                        onChange={handleChange} 
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (

                <>
          <h5>{new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(amount)}</h5>

          {/* <h5>${amount}</h5> */}


          <p>{category}</p>

          <p>{truncate(description || "", 40)}</p>

          

            <div className='delete-container'>
            <button onClick={() => setIsEditing(true)}>Edit</button> {/* Edit button */}
            {Delete && (
                <img 
                src={Delete} 
                alt="delete" 
                role="button" 
                tabIndex={0} 
                onClick={() => onDelete?.(id)}
                onKeyDown={(e) => e.key === "Enter" && onDelete?.(id)}
                />
            )}
            </div>
        </>  
        )}
    </div>
  );
};

