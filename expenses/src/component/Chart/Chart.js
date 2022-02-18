import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValues = props.datapoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            maxValue={totalMaximum}
            value={datapoint.value}
            lable={datapoint.label}
          />
        );
      })}
    </div>
  );
};
export default Chart;
