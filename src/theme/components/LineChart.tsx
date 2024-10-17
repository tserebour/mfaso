// LineChart.js
import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineChart = () => {
  const options = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      show: false, // Hide the x-axis
    },
    yAxis: {
      type: 'value',
      show: false, // Hide the y-axis
    },
    series: [
      {
        name: 'Sales',
        type: 'line',
        data: [10, 6, 5, 7, 10, 9],
        smooth: true,
        symbol: 'none',
        // Optional: smooth the line
      },
    ],
  };

  const chartStyle = {
    height: '70px', // Adjust the height
    width: '100px', // Adjust the width
  };

  return <ReactECharts option={options} style={chartStyle} />;
};

export default LineChart;
