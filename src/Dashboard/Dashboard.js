// Dashboard.js
import React, { useState } from 'react';
import ScatterPlot from '../ScatterPlot/ScatterPlot';
const Dashboard = () => {
  // Define the datasets
  const dataset1 = {
    x: [1, 2, 3, 4, 5],
    y: [10, 14, 12, 16, 18],
    type: 'scatter',
    mode: 'markers+lines',
    marker: { color: 'rgb(93, 164, 214)', size: 12, symbol: 'circle' },
    name: 'Dataset 1',
    text: ['A', 'B', 'C', 'D', 'E'],
    hoverinfo: 'text',
  };

  const dataset2 = {
    x: [1, 2, 3, 4, 5],
    y: [15, 13, 11, 10, 14],
    type: 'scatter',
    mode: 'markers+lines',
    marker: { color: 'rgb(255, 144, 14)', size: 12, symbol: 'square' },
    name: 'Dataset 2',
    text: ['F', 'G', 'H', 'I', 'J'],
    hoverinfo: 'text',
  };

  // State to control visibility of each dataset
  const [showDataset1, setShowDataset1] = useState(true);
  const [showDataset2, setShowDataset2] = useState(true);

  // Handler to toggle visibility of Dataset 1
  const toggleDataset1 = () => {
    setShowDataset1(!showDataset1);
  };

  // Handler to toggle visibility of Dataset 2
  const toggleDataset2 = () => {
    setShowDataset2(!showDataset2);
  };

  // Conditionally add datasets based on visibility state
  const selectedData = [];
  if (showDataset1) selectedData.push(dataset1);
  if (showDataset2) selectedData.push(dataset2);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Data Selection Dashboard</h1>
      <div>
        {/* Toggle buttons for each dataset */}
        <button onClick={toggleDataset1}>
          {showDataset1 ? 'Hide Dataset 1' : 'Show Dataset 1'}
        </button>
        <button onClick={toggleDataset2}>
          {showDataset2 ? 'Hide Dataset 2' : 'Show Dataset 2'}
        </button>
      </div>
      {/* Render the ScatterPlot with selected datasets */}
      <ScatterPlot data={selectedData} />
    </div>
  );
};

export default Dashboard;
