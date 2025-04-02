import { useState, useRef, useEffect } from 'react';

export const Fab = ({onAddExpense}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({
        amount: '',
        category: '',
        description: '',
        date: ''
    });

    const formRef = useRef(null);

    const onSubmit = () => {
        if (!data.amount || !data.category || !data.description || !data.date) return;
        console.log(data)

        const newExpense = {
            id: Date.now(), // Unique ID
            amount: parseFloat(data.amount),
            category: data.category, 
            description: data.description,
            date: data.date
        //console.log(data);
        //setData({ amount: '', category: '', description: '', date: '' });
        //setIsOpen(false); // Close the form after submitting
     };

     onAddExpense(newExpense) // Call parent function to add expense
        setData({ amount: '', category: '', description: '', date: '' }); // Reset form
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
                    <input
                        type="text"
                        placeholder='Category'
                        value={data.category}
                        onChange={(e) => setData({ ...data, category: e.target.value })}
                    />
                    <input
                        type="text"
                        value={data.description}
                        placeholder='Description'
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                    />
                    <input
                        type="date"
                        value={data.date}
                        placeholder='Date'
                        onChange={(e) => setData({ ...data, date: e.target.value })}
                    />
                    <button
                        onClick={onSubmit}
                        disabled={!data.amount || !data.category || !data.description || !data.date}
                        className={data.amount && data.category && data.description && data.date ? '' : 'disabled'}
                    >
                        Submit
                    </button>
                </div>
            )}
            console.log("rendering fab")

            <button className='fab' onClick={() => setIsOpen(!isOpen)}>
                <p>+</p>
            </button>
        </div>
        
    );
};