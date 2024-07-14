// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ onFilterChange }) => {
  return (
    <div className="p-4 mt-7 w-full md:w-64 bg-gray-100 ">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Filter By Customer Name
        </label>
        <input
          type="text"
          onChange={(e) => onFilterChange('name', e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
            Filer By Amount
        </label>
        <input
          type="number"
          onChange={(e) => onFilterChange('amount', e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default Sidebar;
