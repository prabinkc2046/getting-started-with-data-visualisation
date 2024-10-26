import Plot from 'react-plotly.js';

const LineChart = () => {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [1, 4, 6],
          name: 'Simple data',
          type: 'scatter',
          mode: 'lines+markers',
        },
      ]}
      layout={{
        title: 'my simple chart',
        xaxis: { title: 'x axis ' },
        yaxis: { title: 'y axis' },
      }}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default LineChart;
