import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js (make sure to use 'auto' version)

const TransactionGraph = ({ data }) => {
  console.log('TransactionGraph data:', data);

  const chartData = {
    labels: data.date,
    datasets: [
      {
        label: 'Transaction Amount',
        data: data.amount,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 mt-4 bg-white rounded shadow w-full md:w-auto">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default TransactionGraph;
