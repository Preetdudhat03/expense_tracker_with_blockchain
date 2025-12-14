---

<h1>💰 Expense Tracker – Blockchain DApp</h1>

A decentralized Expense Tracker DApp built using Solidity, Truffle, Ganache, Web3.js, and React.js.
This application stores expense records securely on the Ethereum blockchain and allows users to track spending transparently using MetaMask.


---

🚀 Tech Stack

Layer	Technology

Frontend	React.js, CSS
Blockchain	Ethereum
Smart Contract	Solidity
Framework	Truffle
Local Network	Ganache
Wallet	MetaMask
Web3 Library	Web3.js



---

✨ Features

➕ Add expenses with amount and description

🔐 Secure blockchain-based storage

👤 Account-specific expense tracking

⏱ Timestamp, block number & gas details

🔄 Real-time updates using events

🎨 Simple and clean React UI



---

📁 Project Structure

expense-tracker/<br>
├── contracts/<br>
│   ├── ExpenseTracker.sol<br>
│   └── Migrations.sol<br>
├── migrations/<br>
│   └── 2_deploy_contracts.js<br>
├── client/<br>
│   ├── src/<br>
│   │   ├── components/<br>
│   │   │   ├── AddExpense.js<br>
│   │   │   └── ExpenseList.js<br>
│   │   ├── App.js<br>
│   │   ├── expenseTracker.js<br>
│   │   └── styles/<br>
│   └── package.json<br>
├── truffle-config.js<br>
└── README.md<br>


---

🛠 Prerequisites

Make sure you have the following installed:

Node.js (v16+ recommended)

Truffle

Ganache

MetaMask browser extension


Install Truffle globally:

npm install -g truffle


---

🚀 How to Run the Project

1️⃣ Start Ganache

Open Ganache

Run it on port 7545



---

2️⃣ Compile & Deploy Smart Contract

truffle compile
truffle migrate --reset


---

3️⃣ Configure MetaMask

Add a custom network:

RPC URL: http://127.0.0.1:7545

Chain ID: 1337


Import an account using a private key from Ganache



---

4️⃣ Run React Frontend

cd client
npm install
npm start

The app will open at:

http://localhost:3000


---

🧠 Smart Contract Overview

Expense Structure

struct Expense {
    uint256 amount;
    string description;
    uint256 timestamp;
    uint256 blockNumber;
    uint256 gasLimit;
}

Key Functions

Function	Description

addExpense()	Adds an expense to blockchain
getExpenses()	Fetches user-specific expenses
ExpenseAdded	Event triggered on new expense



---

⚠ Common Errors & Fixes

❌ N/A or Empty Data

✔ Ensure:

Contract is deployed

Correct network selected in MetaMask

ABI matches deployed contract



---

❌ MetaMask Not Detected

✔ Install MetaMask and refresh browser


---

❌ Wrong Network

✔ Switch to Ganache network


---

❌ ABI Error / Decode Error

✔ Recompile & redeploy:

truffle migrate --reset


---

🔮 Future Enhancements

✏ Edit & delete expenses

📊 Monthly expense analytics

📄 Export data (CSV / PDF)

💱 Multi-currency support

🌍 Deploy to Ethereum testnet



---

👨‍🎓 Author

Student Blockchain Mini Project
Built for learning and academic purposes.


---

❤ Acknowledgements

Ethereum

Truffle Suite

OpenZeppelin

MetaMask



---

⭐ If you like this project, don’t forget to star the repo!


---
