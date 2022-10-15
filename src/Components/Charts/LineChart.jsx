import "./lineChart.css";
import * as React from "react";
import { LineChart, Line, XAxis } from "recharts";
import PropTypes from 'prop-types';



const LineCharts = ({data}) => {

  const formatDay = (day) => {
    const weekDay = new Array(7);
    weekDay[1] = "L"
    weekDay[2] = "M"
    weekDay[3] = "M"
    weekDay[4] = "J"
    weekDay[5] = "V"
    weekDay[6] = "S"
    weekDay[7] = "D"

    return weekDay[day];
  }
  return (
    <div className="linechart-ui">
      <span>Durée moyenne des sessions</span>
      <LineChart width={200} height={150} data={data.sessions}>
        <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} />
        <XAxis dataKey="day" axisLine={false} stroke="#fff" tickLine={false} tickFormatter={formatDay} />
      </LineChart>
    </div>
  );
}
LineCharts.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LineCharts;