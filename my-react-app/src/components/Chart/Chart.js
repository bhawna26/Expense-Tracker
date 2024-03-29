import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart=(props)=>{
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (<div className="chart">
    {/* dynamic list creation is done using map */}
  {props.dataPoints.map((dataPoint)=>(
  <ChartBar 
  key={dataPoint.id}
  value={dataPoint.value}
   maxValue={totalMaximum}/>
   ))}
  </div>
  );
};
export default Chart;