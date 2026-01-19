// src/components/stocks/StockChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const StockChart = ({ data }) => {
  // Generate more detailed chart data if needed
  const chartData = data.length > 0 ? data : [
    { date: 'Jan', price: 2300 },
    { date: 'Feb', price: 2350 },
    { date: 'Mar', price: 2400 },
    { date: 'Apr', price: 2425 },
    { date: 'May', price: 2456 },
    { date: 'Jun', price: 2500 },
    { date: 'Jul', price: 2480 },
    { date: 'Aug', price: 2520 },
    { date: 'Sep', price: 2550 },
    { date: 'Oct', price: 2530 },
    { date: 'Nov', price: 2580 },
    { date: 'Dec', price: 2600 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-gray-600">{label}</p>
          <p className="text-lg font-bold text-gray-900">
            ₹{payload[0].value.toLocaleString('en-IN')}
          </p>
        </div>
      );
    }
    return null;
  };

  // Determine chart color based on trend
  const firstPrice = chartData[0]?.price || 0;
  const lastPrice = chartData[chartData.length - 1]?.price || 0;
  const isPositive = lastPrice >= firstPrice;

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(value) => `₹${value.toLocaleString('en-IN')}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop 
                offset="5%" 
                stopColor={isPositive ? "#10b981" : "#ef4444"} 
                stopOpacity={0.3}
              />
              <stop 
                offset="95%" 
                stopColor={isPositive ? "#10b981" : "#ef4444"} 
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="price"
            stroke={isPositive ? "#10b981" : "#ef4444"}
            strokeWidth={2}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;