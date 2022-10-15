import "./radialChart.css";
import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import PropTypes from 'prop-types';


const RadialCharts = ({data}) => {
  console.log(data, "<== data radialChart");

  const dataConverted = [
    {
      score: data * 100,
      fill: "#ff0000"
    }
  ]

  return (
    <ResponsiveContainer minWidth={200} minHeight={200} >
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="50%"
        barSize={10}
        data={dataConverted}
        startAngle={90}
        endAngle={450}
      >
        <text x="35%" y="20%" textAnchor="middle" dominantBaseline="middle">
          Score
        </text>
        <text
          className="h1-ui"
          x="50%"
          y="42%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {data * 100}%
        </text>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          de votre
        </text>
        <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle">
          objectif
        </text>
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar background={true} dataKey='score' cornerRadius={20} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

RadialCharts.propTypes = {
  data: PropTypes.number.isRequired,
}

export default RadialCharts;