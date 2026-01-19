// src/components/mutualFunds/MutualFundChart.jsx
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MutualFundChart = () => {
  // Generate NAV chart data
  const navData = [];
  let nav = 100;
  
  for (let i = 1; i <= 12; i++) {
    const change = (Math.random() - 0.5) * 4; // Random change between -2% and +2%
    nav = nav * (1 + change / 100);
    navData.push({
      month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i-1],
      nav: Math.round(nav * 100) / 100,
      change: change.toFixed(2)
    });
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-gray-600">{label}</p>
          <p className="text-lg font-bold text-gray-900">
            ₹{payload[0].value.toLocaleString('en-IN')}
          </p>
          <p className={`text-sm ${parseFloat(payload[0].payload.change) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {parseFloat(payload[0].payload.change) >= 0 ? '+' : ''}{payload[0].payload.change}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={navData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(value) => `₹${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            <linearGradient id="colorNav" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00d09c" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00d09c" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="nav"
            stroke="#00d09c"
            strokeWidth={2}
            fill="url(#colorNav)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MutualFundChart;