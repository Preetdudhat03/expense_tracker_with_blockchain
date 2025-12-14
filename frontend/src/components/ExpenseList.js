import React from "react";

function ExpenseList({ expenses }) {
  console.log("Expenses Data:", expenses);
  return (
    <div className="card">
      <h2>Your Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Amount (₹)</th>
            <th>Description</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>{expense.timestamp}</td> {/* Convert timestamp to readable date */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No expenses added yet.</td>
            </tr>
          )}
          

        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
