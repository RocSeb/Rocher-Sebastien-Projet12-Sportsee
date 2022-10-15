import "./radarChart.css";
import React from "react";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis
} from "recharts";
import PropTypes from "prop-types";

const RadarCharts = ({data}) => {

  const formatKind = (number) => {
    const kinds = new Array(6)
    kinds[1] = 'Cardio'
    kinds[2] = 'Energie'
    kinds[3] = 'Endurance'
    kinds[4] = 'Force'
    kinds[5] = 'Vitesse'
    kinds[6] = 'Intensité'
    return kinds[number];
  }

  return (
    <div className="radar-UI">
      <ResponsiveContainer minWidth={200} minHeight={200} >
        <RadarChart
          cx='50%'
          cy='50%'
          outerRadius="50%"
          data={data.data}
        >
          <PolarGrid stroke="#fff" radialLines={false} />
          <PolarAngleAxis  
          dataKey="kind"
          stroke="#fff" 
          tickLine={false} 
          tickFormatter={formatKind}
          tickSize={10} 
          dy={3}
          />
          <Radar
            dataKey="value"
            fill="#EE0000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarCharts.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RadarCharts;