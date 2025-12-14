// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract ExpenseTracker {
    struct Expense {
        uint256 amount;
        string description;
        uint256 timestamp;
    }

    mapping(address => Expense[]) private userExpenses;

    event ExpenseAdded(address indexed user, uint256 amount, string description, uint256 timestamp);

    function addExpense(uint256 _amount, string memory _description) public {
        userExpenses[msg.sender].push(Expense(_amount, _description, block.timestamp));
        emit ExpenseAdded(msg.sender, _amount, _description, block.timestamp);
    }

    function getExpenses() public view returns (uint256[] memory, string[] memory, uint256[] memory) {
    Expense[] storage expenses = userExpenses[msg.sender];
    uint256[] memory amounts = new uint256[](expenses.length);
    string[] memory descriptions = new string[](expenses.length);
    uint256[] memory timestamps = new uint256[](expenses.length);

    for (uint256 i = 0; i < expenses.length; i++) {
        amounts[i] = expenses[i].amount;
        descriptions[i] = expenses[i].description;
        timestamps[i] = expenses[i].timestamp;
    }

    return (amounts, descriptions, timestamps);
}

}
