import "./lineChart.css";
import * as React from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import PropTypes from 'prop-types';


/**
 * Display LineCharts component
 * @function LineCharts
 * @param {object} props.data
 * @param {array} session
 * @param {string} day
 * @param {number} userId
 * @returns {Reactnode} jsx injected in DOM
 */
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
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: 'rgba(255,255,255, 0.6)' }}
        />
      </LineChart>
    </div>
  );
}

/**
 * Render CustomTooltip component
 * @function CustomTooltip
 * @param {boolean} props.active > hover ? y/n
 * @param {array} props.payload > data to display
 * @returns {Reactnode} JSX injected in DOM
 */
 function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <span className="custom-tooltip">{`${payload[0].value} min`}</span>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

LineCharts.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LineCharts;