import React from 'react'
import './BarChartTooltips.css'
import PropTypes from 'prop-types'

/**
 * Display SimpleBarChartTooltip component
 * @function SimpleBarChartTootip
 * @param {number} props.value
 * @param {boolean} props.active
 * @returns {Reactnode} jsx injected in DOM
 */
const SimpleBarChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="simplebarcharttooltip-wrapper">
        <div className="simplebarcharttooltip-content">
          <p className="simplebarcharttooltip-content_item">
            {payload[0].value}kg
          </p>
          <p className="simplebarcharttooltip-content_item">
            {payload[1].value}kCal
          </p>
        </div>
      </div>
    )
  }

  return null
}

SimpleBarChartTooltip.propTypes = {
  value: PropTypes.number,
  active: PropTypes.bool,
}

export default SimpleBarChartTooltip