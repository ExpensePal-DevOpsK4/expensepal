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
    
}) => {
   
  return (
      <div className='card'>
      {  /* The edit button code */}
      
                <>
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
        </>  
        
    </div>
  );
};

