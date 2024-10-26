// Import React and Plotly component
import React from 'react';
import Plot from 'react-plotly.js';

// Define the ScatterPlot component
const ScatterPlot = ({ data }) => {
  return (
    <Plot
      // Define the data for the scatter plot
      data={data}
      // Define layout settings for the plot
      layout={{
        title: 'Scatter Plot Example', // Title displayed at the top
        showlegend: true, // Enable the legend
        legend: {
          // Customize the legend
          orientation: 'h', // Horizontal orientation for legend
          x: 0.5, // Position legend in center
          xanchor: 'center',
          y: -0.2, // Position below the chart
        },
        xaxis: {
          title: 'X Axis Label', // Label for the x-axis
          showgrid: true, // Show gridlines on x-axis
          zeroline: false, // Hide the x-axis baseline
          showline: true, // Show line along the x-axis
        },
        yaxis: {
          title: 'Y Axis Label', // Label for the y-axis
          showgrid: true, // Show gridlines on y-axis
          zeroline: false, // Hide the y-axis baseline
          showline: true, // Show line along the y-axis
        },
        hovermode: 'closest', // Show the tooltip of the closest point
        plot_bgcolor: '#f3f3f3', // Background color for plot area
        paper_bgcolor: '#ffffff', // Background color for entire chart area
      }}
      // Define component styling to make it responsive
      style={{ width: '100%', height: '100%' }}
      config={{
        displayModeBar: false,
      }}
    />
  );
};

// Export the component for use in the main app
export default ScatterPlot;
