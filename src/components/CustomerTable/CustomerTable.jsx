import React from 'react';

const CustomerTable = ({ customers, transactions, onCustomerSelect }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white shadow-md rounded sm:max-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-cyan-700 border-gray-200 bg-gray-50">ID</th>
            <th className="py-2 px-4 border-b text-cyan-700 border-gray-200 bg-gray-50">Name</th>
            <th className="py-2 px-4 border-b text-cyan-700 border-gray-200 bg-gray-50">Transactions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            const customerTransactions = transactions.filter(
              (transaction) => transaction.customer_id == customer.id
            );
            return (
              <tr
                key={customer.id}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => onCustomerSelect(customer.id)}
              >
                <td className="py-2 px-4 border-b border-gray-200">{customer.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{customer.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <ul>
                    {customerTransactions.map((transaction) => (
                      <li key={transaction.id}>
                        <span className='text-cyan-700 font-bold'>Date:</span> {transaction.date} <br></br>
                        <span className='text-cyan-700 font-bold'>Amount:</span> {transaction.amount}<br></br><br></br>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
