import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import PropTypes from 'prop-types'

const BarCharts = ({data}) => {
  const formatDay = (day) => {
    return day.slice(-1);
  }
  return (
    <ResponsiveContainer minWidth={250} minHeight={250} >
      <BarChart
        width={1200}
        height={300}
        data={data.sessions}
        margin={{
          top: 0,
          right: 80,
          left: 80,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickLine={false} tickMargin={10} tickFormatter={formatDay} />
        <YAxis
          tickMargin={20}
          tickLine={false}
          axisLine={false}
          orientation="right"
          type="number"
          tickCount="3"
          dataKey="kilogram"
        />
        <YAxis yAxisId="cal" datakey="calories" hide={true}/>
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          height={100}
        />
        <Tooltip />

        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          fill="#111"
          radius={[20, 20, 0, 0]}
          barSize={15}
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="calories"
          yAxisId="cal"
          fill="#ff0000"
          radius={[20, 20, 0, 0]}
          barSize={15}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
BarCharts.propTypes = {
  data: PropTypes.object.isRequired
}

export default BarCharts;