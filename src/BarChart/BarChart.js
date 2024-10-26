// Import React and Plotly component
import React from 'react';
import Plot from 'react-plotly.js';

// Define the BarChart functional component
function BarChart() {
  return (
    <Plot
      // Define the data for the bar chart
      data={[
        {
          x: ['Product A', 'Product B', 'Product C'], // X-axis categories
          y: [20, 14, 23], // Y-axis values for each category
          type: 'bar', // Specify 'bar' as the chart type
          marker: {
            // Custom styling for the bars
            color: 'orange', // Set bar color to orange
            line: { color: 'black', width: 1 }, // Add border to bars
          },
          name: 'Sales', // Legend label for the data series
        },
      ]}
      // Define the layout for the chart
      layout={{
        title: 'Sales by Product', // Title displayed at the top
        xaxis: {
          title: 'Products', // Label for the x-axis
          tickangle: -45, // Rotate x-axis labels for readability
        },
        yaxis: {
          title: 'Units Sold', // Label for the y-axis
          range: [0, 30], // Set the range for the y-axis
        },
        bargap: 2, // Gap between bars
        plot_bgcolor: '#f8f8f8', // Background color for the plot area
        paper_bgcolor: '#ffffff', // Background color for the chart container
      }}
      // Define the styling for the component
      style={{ width: '100%', height: '100%' }}
    />
  );
}

// Export the component so it can be used in other parts of the app
export default BarChart;
