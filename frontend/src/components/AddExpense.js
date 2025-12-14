import React, { useState } from "react";
import "../styles/AddExpense.css";

function AddExpense({ addExpense }) {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const parsedAmount = parseInt(amount, 10);  // Parse the amount as a number
        const trimmedDescription = description.trim();  // Get description and trim it
    
        // Log raw values for debugging
        console.log("Raw Amount:", amount);
        console.log("Parsed Amount:", parsedAmount);
        console.log("Description:", trimmedDescription);
    
        // Validate input
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            console.error("⚠️ Invalid amount entered. Please enter a positive number.");
            return;
        }
    
        if (!trimmedDescription) {
            console.error("⚠️ Description is empty. Please enter a valid description.");
            return;
        }
    
        // Call addExpense function
        addExpense(parsedAmount, trimmedDescription);
    
        // Optionally reset the form fields after submission
        setAmount("");
        setDescription("");
    };
    
    return (
        <div className="input-group">
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div><button type="submit">Add Expense</button></div>
                
            </form>
        </div>
    );
}

export default AddExpense;
