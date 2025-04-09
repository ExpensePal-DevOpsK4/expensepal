import { useState, useRef, useEffect } from 'react';

export const Fab = ({onAddExpense}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({
        amount: '',
        category: '',
        description: ''
    
    });

    const formRef = useRef(null);

    const category = ["Food & Drinks", "Transport", "Rent & Utilities", "Shopping", "Health & Medical", "Entertainment", "Savings & Investments", "Education", "Debt & Loans", "Miscellaneous"]

    const onSubmit = () => {
        if (!data.amount || !data.category || !data.description) return;
        console.log(data)

        const newExpense = {
            id: Date.now(),
            amount: parseFloat(data.amount),
            category: data.category, 
            description: data.description

          
     };

     onAddExpense(newExpense) // Call parent function to add expense
        setData({ amount: '', category: '', description: '' }); // Reset form
        setIsOpen(false); // Close form
     };

     

    // Handle clicks outside the form
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


    return (
        <div className='fab-container'>
            {isOpen && (
                <div className='fab-form' ref={formRef}>
                    <input
                        type="number"
                        value={data.amount}
                        onChange={(e) => setData({ ...data, amount: e.target.value })}
                        placeholder='Amount'
                    />
                    
                    <select
                           value={data.category}
                           onChange={(e) => setData({ ...data, category: e.target.value })}
                     >
                          <option value="">Category</option>
                          {category.map((cat) => (
                          <option key={cat} value={cat}>
                          {cat}
                          </option>
                           ))}
                    </select>
                    <input
                        type="text"
                        value={data.description}
                        placeholder='Description'
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                    />
                   
                    <button
                        onClick={onSubmit}
                        disabled={!data.amount || !data.category || !data.description }
                        className={data.amount && data.category && data.description ? '' : 'disabled'}
                    >
                        Submit
                    </button>
                </div>
            )}
            

            <button className='fab' onClick={() => setIsOpen(!isOpen)}>
                <p>+</p>
            </button>
        </div>
        
    );
};