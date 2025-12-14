// loadBlockchainData.js
import Web3 from "web3";
import ExpenseTrackerABI from "./contracts/ExpenseTracker.json"; // Ensure the ABI path is correct

const loadBlockchainData = async () => {
    if (typeof window.ethereum === "undefined") {
        console.error("❌ MetaMask is not installed!");
        return null;
    }

    try {
        // Request account access from MetaMask
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Initialize Web3
        const web3 = new Web3(window.ethereum);

        // Get connected accounts
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        // Get the network ID
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = ExpenseTrackerABI.networks[networkId];

        if (!deployedNetwork) {
            console.error(`❌ Smart contract not deployed on this network (ID: ${networkId})`);
            return null;
        }

        // Load contract instance
        const contract = new web3.eth.Contract(ExpenseTrackerABI.abi, deployedNetwork.address);

        console.log("✅ Blockchain connected:", { account, contract });

        return { contractInstance: contract, account };
    } catch (error) {
        console.error("❌ Error loading blockchain data:", error);
        return null;
    }
};

export default loadBlockchainData;
