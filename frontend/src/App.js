import React, { useEffect, useState } from "react";
import loadBlockchainData from "./expenseTracker"; // Import the blockchain loader
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import "./styles/ExpenseTracker.css"; // Import CSS for styling

function App() {
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState("");
    const [expenses, setExpenses] = useState([]);

    // Initialize blockchain data (contract & account)
    useEffect(() => {
        const initBlockchain = async () => {
            const blockchainData = await loadBlockchainData();

            if (blockchainData) {
                setContract(blockchainData.contractInstance);
                setAccount(blockchainData.account);
            } else {
                console.error("⚠️ Blockchain data could not be loaded. Check MetaMask and network settings.");
            }
        };

        initBlockchain();
    }, []);

    // Set up event listener and fetch expenses
    useEffect(() => {
        if (contract && account) {
            loadExpenses(); // Load expenses when contract & account are set

            try {
                contract.events
                    .ExpenseAdded({}, (error, event) => {
                        if (error) {
                            console.error("❌ Event Listening Error:", error);
                        } else {
                            console.log("📢 Blockchain Event:", event.returnValues);
                            loadExpenses(); // Auto-update UI when a new expense is added
                        }
                    });
            } catch (error) {
                console.error("❌ Error setting up event listener:", error);
            }
        }
    }, [contract, account]); // Added `contract` and `account` as dependencies

    // Load expenses from blockchain
    const loadExpenses = async () => {
        if (!contract || !account) return;

        try {
            // Fetch expenses
            const result = await contract.methods.getExpenses().call({ from: account });

            // Log the entire result for debugging purposes
            console.log("Returned from getExpenses:", result);

            // Access amounts, descriptions, and timestamps using the keys 0, 1, and 2
            const amounts = result[0];
            const descriptions = result[1];
            const timestamps = result[2];

            console.log("Returned amounts:", amounts);
            console.log("Returned descriptions:", descriptions);
            console.log("Returned timestamps:", timestamps);

            if (amounts.length === 0 || descriptions.length === 0 || timestamps.length === 0) {
                console.log("No expenses found.");
                return; // Exit early if there are no expenses
            }

            // Ensure amounts, descriptions, and timestamps are arrays
            if (amounts.length !== descriptions.length || amounts.length !== timestamps.length) {
                throw new Error("Mismatch in the length of the arrays returned from getExpenses");
            }

            // Parse expenses
            const parsedExpenses = amounts.map((amount, index) => ({
                amount: parseInt(amount, 10), // Convert to number (ensure base 10)
                description: descriptions[index],
                timestamp: new Date(parseInt(timestamps[index], 10) * 1000).toLocaleString(), // Convert timestamp to readable date
            }));

            // Log and set expenses
            console.log("✅ Loaded Expenses:", parsedExpenses);
            setExpenses(parsedExpenses);
        } catch (error) {
            console.error("❌ Error fetching expenses:", error);
        }
    };

    // Add expense to blockchain
    const addExpense = async (amount, description) => {
        if (!amount || !description || !contract) {
            console.error("⚠️ Missing data or contract not initialized.");
            return;
        }

        console.log("🔵 Sending Expense Data:", { amount, description, from: account });

        try {
            await contract.methods.addExpense(amount, description).send({ from: account });

            console.log("✅ Expense successfully added to blockchain!");

            // Refresh the expenses after adding
            loadExpenses();
        } catch (error) {
            console.error("❌ Transaction failed:", error);
        }
    };

    return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <p><strong>Connected Account:</strong> {account || "Not Connected"}</p>

            <AddExpense addExpense={addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default App;
