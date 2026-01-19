// src/components/dashboard/PortfolioChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const PortfolioChart = ({ timeRange }) => {
  // Generate portfolio data based on time range
  const generateData = () => {
    const data = [];
    let value = 1000000; // Starting value
    
    const months = timeRange === '1Y' ? 12 : timeRange === '6M' ? 6 : timeRange === '3M' ? 3 : timeRange === '1M' ? 1 : 24;
    
    for (let i = 0; i < months; i++) {
      const change = (Math.random() - 0.5) * 8; // Random change between -4% and +4%
      value = value * (1 + change / 100);
      
      let label;
      if (timeRange === '1M' || timeRange === '3M' || timeRange === '6M') {
        label = `Week ${i + 1}`;
      } else {
        label = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i % 12];
      }
      
      data.push({
        period: label,
        value: Math.round(value),
        change: change.toFixed(2)
      });
    }
    
    return data;
  };

  const data = generateData();
  const isPositive = data[data.length - 1]?.value >= data[0]?.value;

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
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="period" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
          />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
              <stop 
                offset="5%" 
                stopColor={isPositive ? "#00d09c" : "#ef4444"} 
                stopOpacity={0.3}
              />
              <stop 
                offset="95%" 
                stopColor={isPositive ? "#00d09c" : "#ef4444"} 
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={isPositive ? "#00d09c" : "#ef4444"}
            strokeWidth={2}
            fill="url(#colorPortfolio)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioChart;