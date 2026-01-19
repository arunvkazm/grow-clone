// src/components/dashboard/AssetAllocation.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { portfolioData } from '../../data/portfolio';

const AssetAllocation = () => {
  const allocationData = portfolioData.assetAllocation;

  const COLORS = ['#00d09c', '#0088FE', '#FFBB28', '#FF8042', '#8884D8'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const investment = (portfolioData.currentValue * payload[0].payload.value) / 100;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{payload[0].name}</p>
          <p className="text-gray-600">{payload[0].value}%</p>
          <p className="text-sm text-gray-500">
            ₹{investment.toLocaleString('en-IN')}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={allocationData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {allocationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssetAllocation;