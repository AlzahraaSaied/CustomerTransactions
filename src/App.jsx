// src/App.jsx
import { useState, useEffect } from 'react';
import CustomerTable from './components/CustomerTable/CustomerTable';
import TransactionGraph from './components/TransactionGraph/TransactionGraph';
import axios from 'axios';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [graphData, setGraphData] = useState({ date: [], amount: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://alzahraasaied.github.io/Transactions/db.json');
        const data = response.data;
        setCustomers(data.customers);
        setTransactions(data.transactions);
        setFilteredCustomers(data.customers); // Initially set to all customers
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterType, filterValue) => {
    let filtered = [...customers];
    if (filterType === 'name') {
      filtered = customers.filter(customer =>
        customer.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else if (filterType === 'amount') {
      filtered = customers.filter(customer =>
        transactions
          .filter(transaction => transaction.customer_id == customer.id)
          .reduce((sum, transaction) => sum + transaction.amount, 0) <= filterValue
      );
    }
    setFilteredCustomers(filtered);
  };

  const handleCustomerSelect = (customerId) => {
    const customerTransactions = transactions.filter(transaction => transaction.customer_id == customerId);
    const aggregatedData = aggregateTransactionsByDate(customerTransactions);
    setGraphData(aggregatedData);
    setSelectedCustomer(customerId);
  };

  const aggregateTransactionsByDate = (transactions) => {
    const aggregatedData = {};
    transactions.forEach(transaction => {
      const date = transaction.date; 
      const amount = transaction.amount;
      if (aggregatedData[date]) {
        aggregatedData[date] += amount;
      } else {
        aggregatedData[date] = amount;
      }
    });

    const date = Object.keys(aggregatedData);
    const amount = Object.values(aggregatedData);
    return { date, amount };
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar onFilterChange={handleFilterChange} />
      <div className="flex-grow p-4">
        <CustomerTable customers={filteredCustomers} transactions={transactions} onCustomerSelect={handleCustomerSelect} />
        {selectedCustomer && <TransactionGraph data={graphData} />}
      </div>
    </div>
  );
};

export default App;
