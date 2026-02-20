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

---

🚀 Step-by-Step Setup Guide

✅ <h3>Step 1: Install Required Tools</h3>

Make sure you have the following installed:

Node.js (v16 or later)

npm

Truffle

Ganache

MetaMask (Browser Extension)


npm install -g truffle


---

✅ Step 2: Start Ganache (Local Blockchain)

Option A: Ganache GUI

1. Open Ganache


2. Click Quickstart Ethereum


3. Note the following:

RPC URL: http://127.0.0.1:7545

Network ID: 5777




Option B: Ganache CLI

ganache --networkId 5777 --port 7545<br>
<img width="825" height="927" alt="image" src="https://github.com/user-attachments/assets/d323192b-2979-469e-ac60-783769027851" />



---

✅ Step 3: Configure MetaMask

1. Open MetaMask<br>
<img width="1918" height="975" alt="image" src="https://github.com/user-attachments/assets/927f7660-a24c-498c-8fe3-59eefba83c88" />



2. Add a new network:<br>

Network Name: Ganache<br>
RPC URL: http://127.0.0.1:7545<br>
Chain ID: 5777<br>
Currency Symbol: ETH<br>
<img width="1918" height="950" alt="image" src="https://github.com/user-attachments/assets/2dbe08ef-8b08-4c14-af0b-a0d9baf9945b" />


3. Add an account using a private key from Ganache<br>
<img width="1918" height="827" alt="image" src="https://github.com/user-attachments/assets/533775fe-f34f-4c1b-840a-f7948ab6cf8c" /><br>
<img width="1917" height="953" alt="image" src="https://github.com/user-attachments/assets/4d56b74b-2490-4f21-b96b-1d9b17d915ac" />

4. connect the metamask wallet with our project it will automatically detect 
⚠ use same browser for both GUI app and metamask
<img width="1918" height="972" alt="image" src="https://github.com/user-attachments/assets/c0f7c5bc-78d1-41ae-bccc-49e83c3c57da" />




---

✅ Step 4: Compile & Deploy Smart Contract

cd backend
truffle compile<br>
<img width="993" height="307" alt="image" src="https://github.com/user-attachments/assets/bba656e1-7f24-4c08-915e-5f07ea0648c4" />

truffle migrate --reset<br>
<img width="846" height="962" alt="image" src="https://github.com/user-attachments/assets/661e3d45-3c3b-4b67-a678-e7efae93998e" />


✔ Contract will be deployed on the local blockchain


---

✅ Step 5: Copy ABI to Frontend

Copy this file:

backend/build/contracts/ExpenseTracker.json

Paste it into:

frontend/src/contracts/ExpenseTracker.json

⚠ This step is mandatory to avoid ABI errors


---

✅ Step 6: Install Frontend Dependencies

cd frontend
npm install


---

✅ Step 7: Start React Application

npm start

Open browser:

http://localhost:3000<br>
<img width="1918" height="968" alt="image" src="https://github.com/user-attachments/assets/8e33f76c-453c-4744-9657-38da12565492" /><br>
<img width="1918" height="971" alt="image" src="https://github.com/user-attachments/assets/0ca437be-8ebd-42bd-ba72-46ee124c4a08" /><br>
<img width="1916" height="896" alt="image" src="https://github.com/user-attachments/assets/f24db427-cd4d-4fdb-894a-f2495fd9770d" />






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
