import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeigth = "0%";

  if (props.maxValue > 0) {
    barFillHeigth = Math.round((props.value / props.maxValue) * 100) + "%";
    // console.log("props.label", props.label);
    // console.log("props.value", props.value);
    // console.log("props.maxValue", props.maxValue);
  }

  <div className="chart-bar">
    <div className="chart-bar__inner">
      {/* <div className="chart-bar__fill" style={{ height: barFillHeigth }}></div> */}
      <div className="chart-bar__fill" style={{ height: "30%" }}>dfdf</div>
    </div>
    {/* <div className="chart-bar__label">{props.label}</div> */}
    <div className="chart-bar__label">dfsdfdfds</div>
  </div>;
};

export default ChartBar;
